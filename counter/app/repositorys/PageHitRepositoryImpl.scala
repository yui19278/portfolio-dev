package repositories

import javax.inject.{Inject, Singleton}
import scala.concurrent.{ExecutionContext, Future, blocking}
import scalikejdbc._
import models.Hit

@Singleton
class PageHitRepositoryImpl @Inject()(implicit ec: ExecutionContext) extends PageHitRepository {
  private object HitSyntax extends SQLSyntaxSupport[Hit] {
    override val tableName = "page_hits"
    def apply(rs: WrappedResultSet): Hit = Hit(rs.string("path"), rs.long("hits"))
  }
  private val h = HitSyntax.syntax("h")

  /**
   * pathのヒット数を+1して最新値を返す
   * DBアクセスはブロッキング処理のため、Future.blockingで囲む
   */
  override def increment(path: String): Future[Hit] = Future {
    blocking {
      DB.localTx { implicit session =>
        sql"""
          INSERT INTO page_hits (path, hits)
          VALUES ($path, 1)
          ON DUPLICATE KEY UPDATE hits = hits + 1
        """.update.apply()
        withSQL {
          select(h.result.*).from(HitSyntax as h).where.eq(h.path, path)
        }.map(HitSyntax.apply).single.apply().getOrElse {
          throw new IllegalStateException(s"Hit not found for path: $path")
        }
      }
    }
  }
}
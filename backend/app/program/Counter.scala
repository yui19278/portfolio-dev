package backend.app.program

import scalikejdbc.SQLSyntaxSupport
import scalikejdbc.WrappedResultSet
import java.time.ZonedDateTime

private[backend] case class Counter(
  id: Long,
  count: Long,
  updateAt: ZonedDateTime = ZonedDateTime.now
)

/** テーブル定義
  */
private[backend] object CounterTable extends SQLSyntaxSupport[Counter] {
  override val tableName = "access_counter"

  override val columns = Seq("id", "count", "update_at")
}

//private[backend] object CounterMapper {
//  def apply(rs: WrappedResultSet): Counter = {
//    Counter(
//      id = rs.long("id"),
//      count = rs.long("count")
//    )
//  }
//}

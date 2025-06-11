package backend.test

import org.scalatest._
import org.scalatest.wordspec.AnyWordSpec
import org.scalatest.matchers.should.Matchers

import scalikejdbc._
import scalikejdbc.config.DBs
import backend.app.program._


class CounterRepositoryImplFunctionalSpec
  extends AnyWordSpec
    with    Matchers {

  private class Setup {

    private val url = "jdbc:h2:mem:counter;MODE=MySQL;DB_CLOSE_DELAY=0"

    ConnectionPool.singleton(url, "sa", "")

    DB.autoCommit { implicit s =>
      sql"""
        CREATE TABLE access_counter (
          id    BIGINT PRIMARY KEY,
          count BIGINT NOT NULL
        );
      """.execute.apply()

      sql"INSERT INTO access_counter (id, count) VALUES (1, 0)".update.apply()
    }
      val repo = new CounterRepositoryImpl

      def cleanUp(): Unit = DBs.closeAll()
  }

  "getCount" should {
    "カウンターの値を取得できる" in new Setup {
      try  repo.getCount() shouldBe 0L
      finally cleanUp()
    }
  }

  "getAndIncrementCount" should {
    "カウントアップできる" in new Setup {
      try {
        repo.getAndIncrementCount() shouldBe 1L
        repo.getCount()             shouldBe 1L
      } finally cleanUp()
    }
  }
}
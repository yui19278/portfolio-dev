package backend.app.program

import scalikejdbc._

class CounterRepositoryImpl extends CounterRepository {
// 将来的に認証機能も付けたい
private val table: SQLSyntax = SQLSyntax.createUnsafely(CounterTable.tableName)
  /** カウンターの値を取得してインクリメントする
    * @return
    *   インクリメント後のカウンターの値
    */
  override def getAndIncrementCount(): Long = {
    DB.localTx { implicit session =>
      // 現在のカウントを取得
      val current: Long =
        sql"""
             |SELECT count
             |FROM $table
             |WHERE id = 1
             |""".stripMargin
          .map(_.long("count"))
          .single()
          .apply()
          .getOrElse(0L)

      // カウントをインクリメント
      val newCount = current + 1L
      sql"""
           |UPDATE $table
           |SET    count = $newCount
           |WHERE  id    = 1
           |""".stripMargin
        .update()
        .apply()

      newCount
    }
  }

// まあ使わないけど...
  override def getCount(): Long = {
    DB.readOnly { implicit session =>
      sql"""
           |SELECT count
           |FROM $table
           |WHERE id = 1
           |""".stripMargin
        .map(_.long("count"))
        .single()
        .apply()
        .getOrElse(0L)
    }
  }

}

package backend.app.program

trait CounterRepository {

  /** カウンターの値を取得してインクリメントする
    * @return
    *   インクリメント後のカウンターの値
    */
  def getAndIncrementCount(): Long

  /** カウンターの値を取得する
    * @return
    *   カウンターの値
    */
  def getCount(): Long
}

package repositories

import models.Hit
import scala.concurrent.Future

/**
 * ページヒット数を操作するためのリポジトリインターフェース
 */
trait PageHitRepository {
  /**
   * 指定されたパスのヒット数をアトミックに+1し、更新後のHitオブジェクトを返す
   * @param path 対象のパス
   * @return Future[Hit] 更新後のHitオブジェクトを含むFuture
   */
  def increment(path: String): Future[Hit]
}
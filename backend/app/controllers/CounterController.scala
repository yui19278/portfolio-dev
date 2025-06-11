package backend.app.controllers

import backend.app.di.MixinCounterService
import javax.inject.{Inject, Singleton}
import play.api.mvc.{
  AbstractController,
  ControllerComponents,
  Action,
  AnyContent
}
import play.api.libs.json.Json

@Singleton
class CounterController @Inject() (cc: ControllerComponents)
    extends AbstractController(cc) // ← これが無いと Action/Ok が見えない
    with MixinCounterService {

  /** GET /api/counter
    * @return
    *   現在の値を返す
    */
  def getCount: Action[AnyContent] = Action {
    Ok(Json.obj("count" -> counterService.getCount()))
  }

  /** POST /api/counter/increment
    * @return
    *   インクリメントして新しい値を返す
    */
  def increment: Action[AnyContent] = Action {
    val newCount = counterService.getAndIncrementCount()
    Ok(Json.obj("count" -> newCount))
  }
}

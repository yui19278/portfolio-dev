package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json.Json
import scala.concurrent.ExecutionContext

import repositories.PageHitRepository

@Singleton
class HitController @Inject()(
                               cc: ControllerComponents,
                               pageHitRepository: PageHitRepository // DIコンテナからリポジトリを注入
                             )(implicit ec: ExecutionContext) extends AbstractController(cc) {

  /**
   * /api/hit?path=/foo を呼ぶとヒット数を +1 して JSON を返す
   */
  def hit(path: String) = Action.async { implicit request: Request[AnyContent] =>
    pageHitRepository.increment(path).map { hit =>
      Ok(Json.obj("path" -> hit.path, "hits" -> hit.hits))
    }
  }
}
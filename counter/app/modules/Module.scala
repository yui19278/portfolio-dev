package modules

import com.google.inject.AbstractModule
import play.api.{Configuration, Environment}
import repositories.{PageHitRepository, PageHitRepositoryImpl}

class Module(environment: Environment, config: Configuration)
  extends AbstractModule {

  override def configure(): Unit = {
    bind(classOf[PageHitRepository]).to(classOf[PageHitRepositoryImpl])
  }
}
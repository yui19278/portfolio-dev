package backend.app.di

import backend.app.program._

// 将来的に拡充するかな～？

trait MixinCounterService {
  protected lazy val counterService: CounterService = new CounterService {
    private val repo: CounterRepository = new CounterRepositoryImpl

    override def getCount(): Long = repo.getCount()
    override def getAndIncrementCount(): Long = repo.getAndIncrementCount()
  }
}

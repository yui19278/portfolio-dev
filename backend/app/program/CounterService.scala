package backend.app.program

trait CounterService {
  def getCount(): Long
  def getAndIncrementCount(): Long
}

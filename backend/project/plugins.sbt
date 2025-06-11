// playプラグイン
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.8.22")
addSbtPlugin("com.github.sbt" % "sbt-native-packager" % "1.9.16")

// scalafix
addSbtPlugin("ch.epfl.scala" % "sbt-scalafix" % "0.9.27")
addSbtPlugin("com.github.sbt" % "sbt-cpd" % "2.0.0")



// 上書き
dependencyOverrides ++= Seq(
  "com.github.sbt" % "sbt-native-packager" % "1.9.16",
  "com.typesafe.sbt" % "sbt-twirl"         % "1.5.2",   // ← Twirl も新しく
  "org.scala-lang.modules" %% "scala-xml"  % "2.1.0"
)
addSbtPlugin("com.typesafe.sbt" % "sbt-twirl" % "1.5.1")
addSbtPlugin("org.scalameta" % "sbt-scalafmt"          % "2.5.4")
name         := "backend"
organization := "io.github.yui19278"
version      := "1.0-SNAPSHOT"
scalaVersion := "2.12.20"

lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    libraryDependencies ++= Seq(
      guice,
      "org.scalikejdbc" %% "scalikejdbc"                  % "3.5.0",
      "org.scalikejdbc" %% "scalikejdbc-config"           % "3.5.0",
      "org.scalikejdbc" %% "scalikejdbc-play-initializer" % "2.8.0-scalikejdbc-3.5",
      "mysql"           %  "mysql-connector-java"         % "8.0.33",
      "ch.qos.logback"  %  "logback-classic"              % "1.2.13",
      specs2 % Test,
      "org.scalikejdbc"        %% "scalikejdbc-test"   % "3.5.0" % Test,
      "org.scalatest"          %% "scalatest"               % "3.2.18" % Test,
      "com.h2database"          %  "h2"                % "2.2.224" % Test
    )
  )

//dependencyOverrides += "org.scala-lang.modules" %% "scala-xml" % "2.1.0"
//
//libraryDependencySchemes +=
//  "org.scala-lang.modules" %% "scala-xml" % VersionScheme.Always
//
//dependencyOverrides += "com.typesafe.play" %% "twirl-api" % "1.5.2"
//
//
//// 駄目押しで合わせる
//dependencyOverrides += "org.scala-lang.modules" %% "scala-xml" % "2.1.0"
//dependencyOverrides += "com.typesafe.play" %% "twirl-api" % "1.5.1"
//libraryDependencySchemes +=
//  "org.scala-lang.modules" %% "scala-xml" % VersionScheme.Always
// アプリケーションの基本情報
name := "counter"
organization := "io.yui19278.github"
version := "0.1.0"
scalaVersion := "2.12.20"


lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    //--------------------------------------------------------
    // 依存ライブラリ (project/Dependencies.scala で定義)
    //--------------------------------------------------------
    libraryDependencies ++= Dependencies.App,

    //--------------------------------------------------------
    // コンパイラオプション
    //--------------------------------------------------------
    scalacOptions ++= Seq(
      "-deprecation",
      "-feature",
      "-unchecked",
      "-Xlint",
      "-Ywarn-dead-code",
      "-Ywarn-unused:imports"
    ),

    //--------------------------------------------------------
    // バージョン衝突の解決 (project/Dependencies.scala で定義)
    //--------------------------------------------------------
    dependencyOverrides ++= Seq(
      "org.scala-lang.modules" %% "scala-xml"                % Dependencies.Overrides.ScalaXml,
      "org.scala-lang.modules" %% "scala-parser-combinators" % Dependencies.Overrides.ScalaParserCombinators
    ),

    libraryDependencySchemes ++= Seq(
      "org.scala-lang.modules" %% "scala-xml"                % VersionScheme.Always,
      "org.scala-lang.modules" %% "scala-parser-combinators" % VersionScheme.Always
    )
  )
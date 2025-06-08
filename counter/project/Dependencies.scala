import sbt._

object Dependencies {
  // アプリケーションの依存ライブラリ
  object V {
    val Play           = "2.8.21"
    val Scalikejdbc    = "4.0.0"
    val MysqlConnector = "8.4.0"
  }

  // バージョン衝突の解決用
  object Overrides {
    val ScalaXml               = "2.3.0"
    val ScalaParserCombinators = "2.1.0"
  }

  val App = Seq(
    "com.typesafe.play" %% "play-guice"         % V.Play,
    "org.scalikejdbc"   %% "scalikejdbc"        % V.Scalikejdbc,
    "org.scalikejdbc"   %% "scalikejdbc-config" % V.Scalikejdbc,
    "com.mysql"         %  "mysql-connector-j"  % V.MysqlConnector
  )
}
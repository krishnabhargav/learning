name := "websocket-server"

version := "1.0"

scalaVersion := "2.11.4"

libraryDependencies ++= Seq(
  "org.atmosphere" % "atmosphere-runtime" % "1.0.4",
  "org.atmosphere" % "nettosphere" % "2.1.9")

resolvers += "Sonatype OSS Snapshots" at "http://oss.sonatype.org/content/repositories/snapshots/"

resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"

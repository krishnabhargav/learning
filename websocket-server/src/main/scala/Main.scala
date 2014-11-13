import org.atmosphere.config.service.WebSocketHandlerService
import org.atmosphere.nettosphere.{Config, Nettosphere}
import org.atmosphere.websocket.{WebSocket, WebSocketHandlerAdapter}

object Main {

  def main(args: Array[String]) {

    val builder = new Config.Builder().host("127.0.0.1").port(8080)

    val server = new Nettosphere.Builder().config(builder.build()).build()
    server.start()

    System.in.read()

  }

  @WebSocketHandlerService(path = "/echo")
  class WebSocketChat extends WebSocketHandlerAdapter {

    override def onOpen(webSocket: WebSocket) {
      System.out.println("Connection received")
    }

    override def onTextMessage(webSocket: WebSocket, message: String) {
      System.out.println("Received message")
      webSocket.write(message)
    }

  }
}
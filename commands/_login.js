/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: password

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var msg = "Access denied. Password is: `123` /login"

if (message == "0858") {
  Bot.setProperty(
      "admin_chat",
       chat.chatid,
      "string"
  )

  msg = "login berhasil..!"
}

Bot.sendMessage(msg)

/*CMD
  command: /kotaasal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Bit Signal Fx VIP Member Registration Form*
*=====================================*
📉*Broker Anda :*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("bo", data.message, "text");
var number = parseInt(message)
if (number) {
  Bot.sendMessage("format salah! ❌")
  return
}
Bot.runCommand("/verifi");

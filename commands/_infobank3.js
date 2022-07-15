/*CMD
  command: /infobank3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Withdrawal Request Bit Signal Fx*
*============================*
_Input Nama di Rekening :_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("rekening", data.message, "text");
var number = parseInt(message)
if (number) {
  Bot.sendMessage("format salah! ❌")
  return
}
Bot.runCommand("/verifiwd");

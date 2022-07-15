/*CMD
  command: /infobank2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Withdrawal Request Bit Signal Fx*
*============================*
_Input Nomor Rekening anda :_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("norekening", data.message, "text");
var number = parseInt(message)
if (!number) {
  Bot.sendMessage("format salah! ❌")
  return
}
Bot.runCommand("/infobank3");

/*CMD
  command: 🟪 WITHDRAW
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Withdrawal Request Bit Signal Fx*
*============================*
_Input Nama Bank anda _
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("namabank", data.message, "text");
var number = parseInt(message)
if (number) {
  Bot.sendMessage("format salah! ❌")
  return
}
Bot.runCommand("/infobank2");

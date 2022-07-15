/*CMD
  command: /konfirmasi
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Deposit Payment Confirmation*
*===========================*
_Input nama Bank tujuan :_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("nominal", data.message, "text");
var number = parseInt(message)
if (number) {
  Bot.sendMessage("format salah❗")
  return
}
Bot.runCommand('/konfirmasi2');

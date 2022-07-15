/*CMD
  command: /konfirmasi3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Deposit Payment Confirmation*
*===========================*
_Input nama pengirim :_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("pengirim", data.message, "text");
var number = parseInt(message)
if (number) {
  Bot.sendMessage("🙄 "+ message + " tdk dikenal❗")
  return
}
Bot.runCommand('/konfirmasi4');

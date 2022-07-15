/*CMD
  command: /konfirmasi2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Deposit Payment Confirmation*
*===========================*
_Input nominal transfer :_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("jmlh", data.message, "text");
var number = parseInt(message)
if (!number) {
  Bot.sendMessage("🙄 "+ message + " tdk dikenal❗")
  return
}
Bot.runCommand('/konfirmasi3');

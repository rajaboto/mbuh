/*CMD
  command: /pesanadmins
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Jawab

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = " " + message + " ";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sended")

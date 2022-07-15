/*CMD
  command: /register
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgID=data.user.telegramid;
if(data.user.telegramid==5407078179){
  Bot.sendMessage("Data sudah ada");
}else{
Bot.runCommand("/pendaftaran");
}

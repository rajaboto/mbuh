/*CMD
  command: /signalsl
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Set SL*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("sl", data.message, "text");
Bot.runCommand('/signaltp');

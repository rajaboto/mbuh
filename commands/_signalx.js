/*CMD
  command: /signalx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Set Mata Uang*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("uang", data.message, "text");
Bot.runCommand('/signalsl');

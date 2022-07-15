/*CMD
  command: /signaltp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Set TP*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("tp", data.message, "text");
Bot.runCommand("/oke");

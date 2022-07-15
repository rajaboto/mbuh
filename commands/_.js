/*CMD
  command: *
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

if(!message){
  // sometimes message can be blank
  return // exit from command
}

var isAdminReply = message.indexOf("/reply") + 1
if(!isAdminReply){ return }

var tgid = message.split("/reply")[1]
if(!tgid){ return }

// run other command
Bot.run({
  command: "/pesanadmins",
  options: { tgid: tgid }  // pass tgid in options to that command
});

/*CMD
  command: /pendaftaran
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Bit Signal Fx VIP Member Registration Form*
*=====================================*
👤*Nama Lengkap :*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("nama", data.message, "text");
var number = parseInt(message)
if (number) {
  Bot.sendMessage("format salah! ❌")
  return
}
Bot.runCommand("/whatsappno");

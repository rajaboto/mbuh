/*CMD
  command: /whatsappno
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Bit Signal Fx VIP Member Registration Form*
*=====================================*
📱*Kontak WhatsApp :*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("wa", data.message, "text");
var number = parseInt(message)
if (!number) {
  Bot.sendMessage("format salah! ❌")
  return
}
Bot.runCommand("/kotaasal");

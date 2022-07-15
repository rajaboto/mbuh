/*CMD
  command: /depositbit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Deposit User Bit Signal FX*
*=======================*
_Input Nominal Deposit : (min Rp10.000)_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("nominal", data.message, "text");
var number = parseInt(message)
if (!number) {
  Bot.sendMessage("format salah❗")
  return
}

Bot.sendMessage("📃*Deposit User ("+ (user.id) +") Bit Signal Fx*\n*=================================*\n*Jumlah Transfer :* Rp<nominal>\n\n*Pilih salah satu :*\n\n🟨 *Dana* `085809548026`\na.n Christof\n\n🟨 *Bank Danamon* `003636021408`\na.n Christof\n\n🅿️ *Paypal* bitsignalfx@gmail.com\n*=================================*\n_mohon segera /konfirmasi setelah transfer!_");


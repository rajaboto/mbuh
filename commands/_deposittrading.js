/*CMD
  command: /deposittrading
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
๐*Deposit User Bit Signal FX*
*=======================*
_Input Nominal Deposit : (min Rp400.000)_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("nominal", data.message, "text");
var number = parseInt(message)
if (!number) {
  Bot.sendMessage("format salahโ")
  return
}

Bot.sendMessage("๐*Deposit User ("+ (user.id) +") Join Trading*\n*=================================*\n*Jumlah Transfer :* Rp<nominal>\n\n*Pilih salah satu :*\n\n๐จ *Dana* `085809548026`\na.n Christof\n\n๐จ *Bank Danamon* `003636021408`\na.n Christof\n\n๐ฟ๏ธ *Paypal* bitsignalfx@gmail.com\n*=================================*\n_mohon segera /konfirmasi setelah transfer!_");


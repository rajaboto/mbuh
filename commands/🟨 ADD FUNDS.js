/*CMD
  command: 🟨 ADD FUNDS
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Deposit User Bit Signal FX*
*=======================*
_tentukan tujuan deposit :_
  ANSWER
  keyboard: 🏦 BIT SIGNAL,🏦 JOIN TRADING\n🔙 BACK TO MY PAGE
  aliases: 
CMD*/

User.setProperty("dpst", data.message, "text");
if(data.message=="🏦 BIT SIGNAL"){
  Bot.runCommand("/depositbit");
}
if(data.message=="🏦 JOIN TRADING"){
  Bot.runCommand("/deposittrading");
}

/*CMD
  command: šØ ADD FUNDS
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
š*Deposit User Bit Signal FX*
*=======================*
_tentukan tujuan deposit :_
  ANSWER
  keyboard: š¦ BIT SIGNAL,š¦ JOIN TRADING\nš BACK TO MY PAGE
  aliases: 
CMD*/

User.setProperty("dpst", data.message, "text");
if(data.message=="š¦ BIT SIGNAL"){
  Bot.runCommand("/depositbit");
}
if(data.message=="š¦ JOIN TRADING"){
  Bot.runCommand("/deposittrading");
}

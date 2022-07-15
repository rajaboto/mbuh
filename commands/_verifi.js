/*CMD
  command: /verifi
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Verify Your Membership Data*
*==========================*
👤*Nama :* <nama>

📱*WhatsApp :* <wa>

📉*Brokers :* <bo>
*==========================*
_tentukan pilihan "BENAR" atau "ULANGI"_
  ANSWER
  keyboard: ✅BENAR,❎ULANGI
  aliases: 
CMD*/

if(data.message=="✅BENAR"){
   Bot.runCommand("/myprofile");
}else{
  Bot.runCommand("/pendaftaran");
}

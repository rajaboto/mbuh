/*CMD
  command: /verifiwd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
š*Bank Verification for Withdrawals*
*============================*
*- Bank :* <namabank>

*- Nomor Rekening :* <norekening>

*- Atas Nama :* <rekening>
*=========ā ===================*
_pastikan detail bank anda sudah benar!_
  ANSWER
  keyboard: āļø BENAR,āļø PERBAIKI\nš BACK TO MY PAGE
  aliases: 
CMD*/

if(data.message=="āļø BENAR"){
  Bot.runCommand("oketarikbos");
}
if(data.message=="āļø PERBAIKI"){
  Bot.runCommand("šŖ WITHDRAW");
}


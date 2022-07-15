/*CMD
  command: /verifiwd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📃*Bank Verification for Withdrawals*
*============================*
*- Bank :* <namabank>

*- Nomor Rekening :* <norekening>

*- Atas Nama :* <rekening>
*=========≠===================*
_pastikan detail bank anda sudah benar!_
  ANSWER
  keyboard: ✔️ BENAR,✖️ PERBAIKI\n🔙 BACK TO MY PAGE
  aliases: 
CMD*/

if(data.message=="✔️ BENAR"){
  Bot.runCommand("oketarikbos");
}
if(data.message=="✖️ PERBAIKI"){
  Bot.runCommand("🟪 WITHDRAW");
}


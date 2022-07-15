/*CMD
  command: trsaldo
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

User.setProperty("tarik", data.message, "text");

 if(params){
  let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1];  

  if(!arr[1]){
    Bot.sendMessage("saldo tdk cukup!🥱");
  }else{
    amount = parseFloat(amount);
    let res = Libs.ResourcesLib.userRes("bank_deposit");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("bank_deposit", telegramid);
    
    if(res.have(25)){
       if( res.transferTo(anotherRes, amount) ){
         Bot.sendMessage("Permintaan Penarikan IDR " + amount + "K BERHASIL!!!");
         Bot.runCommand("/infowd")
       }
     }else{
        Bot.sendMessage("❗GAGAL, minimal penarikan Rp25.000!");
     }
  }
}else{
  Bot.sendMessage("❗GAGAL, Format penarikan salah!")
}

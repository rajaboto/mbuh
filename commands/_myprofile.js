/*CMD
  command: /myprofile
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: š back to my page, š« my account
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let wood = Libs.ResourcesLib.userRes("wood");
let crystals = Libs.ResourcesLib.chatRes("crystals");

let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");
let cur_increment = bank_deposit.growth.info().increment;

let bank_deposit2 = Libs.ResourcesLib.userRes("bank_deposit2");

Bot.sendKeyboard("š« MY ACCOUNT\nš¦ BIT SIGNAL,šØ ADD FUNDS\nšŖ WITHDRAW,š© CUST SERVICE","š*VIP Member Dashboard*\n*===ā =================*\nš¤*User :* <nama> / ID : "+ user.id + "\n\nšØ*Total Funds :* IDR "+ money.value().toFixed(1) + "K\n\nš*Trading Balance :* IDR "+ bank_deposit.value().toFixed(1) +"K\n\nš¦*Total Penarikan :* IDR "+ wood.value().toFixed(1) +"K");

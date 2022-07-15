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
  aliases: 🔙 back to my page, 🟫 my account
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let wood = Libs.ResourcesLib.userRes("wood");
let crystals = Libs.ResourcesLib.chatRes("crystals");

let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");
let cur_increment = bank_deposit.growth.info().increment;

let bank_deposit2 = Libs.ResourcesLib.userRes("bank_deposit2");

Bot.sendKeyboard("🟫 MY ACCOUNT\n🟦 BIT SIGNAL,🟨 ADD FUNDS\n🟪 WITHDRAW,🟩 CUST SERVICE","📃*VIP Member Dashboard*\n*===≠=================*\n👤*User :* <nama> / ID : "+ user.id + "\n\n🟨*Total Funds :* IDR "+ money.value().toFixed(1) + "K\n\n📊*Trading Balance :* IDR "+ bank_deposit.value().toFixed(1) +"K\n\n🏦*Total Penarikan :* IDR "+ wood.value().toFixed(1) +"K");

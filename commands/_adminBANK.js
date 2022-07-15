/*CMD
  command: /adminBANK
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

let rnd = Libs.Random; 

let money = Libs.ResourcesLib.userRes("bank_deposit");
let amount = rnd.randomFloat(1000, 2000) 
money.add(amount);

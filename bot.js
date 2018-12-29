
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`**
   سلام عليكم   :grin:  
اقدم لك هذي دعوه لتشرفنا في سيرفر شوب حقنا #,Evolved    :heartpulse:  
سيرفر يبيع  :ok_hand: 
فيزات -:scream: 
تصميم مواقع-:100:  
بوتات- :fire: 
اتمنى انك تخش  :heart_exclamation: 
https://discord.gg/zhCndgY



[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`**
  سلام عليكم   :grin:  
اقدم لك هذي دعوه لتشرفنا في سيرفر شوب حقنا #,Evolved    :heartpulse:  
سيرفر يبيع  :ok_hand: 
فيزات -:scream: 
تصميم مواقع-:100:  
بوتات- :fire: 
اتمنى انك تخش  :heart_exclamation: 
https://discord.gg/zhCndgY


[${member}]**`);


  });


Client.login(process.env.BOT_TOKEN);

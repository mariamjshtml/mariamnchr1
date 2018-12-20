
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`**
   سلام عليكم شباب:wave: 
انتمى انكم تدخلوا سيرفر ده:100: 
:يقدم سيرفر:stuck_out_tongue: 
قيف اوايات على فورتنايت سبوتفاي تاقات كلشي:scream: 
انفايت ريويرد جيب 3 تأخذ 15 الف كريدت:hushed: 
فعاليات:ok_hand: 
بوتات ديسكورد:kiss: 
سولف الخ....:ribbon:
https://discord.gg/hJEnCE

[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`**
 سلام عليكم شباب:wave: 
انتمى انكم تدخلوا سيرفر ده:100: 
:يقدم سيرفر:stuck_out_tongue: 
قيف اوايات على فورتنايت سبوتفاي تاقات كلشي:scream: 
انفايت ريويرد جيب 3 تأخذ 15 الف كريدت:hushed: 
فعاليات:ok_hand: 
بوتات ديسكورد:kiss: 
سولف الخ....:ribbon:
https://discord.gg/hJEnCE
[${member}]**`);


  });


Client.login(process.env.BOT_TOKEN);


const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`**
   نضام أنفايت جديد  :herb: 
  
  :bow_and_arrow:  2 Invites ==> 10k Credits  :bow_and_arrow: 
  
  :bow_and_arrow:  4 invites ==> Visa 25$  :bow_and_arrow:
  
  :bow_and_arrow:  ملاحضة : فيزا صالحة لشراء نيترو :Nitro: و تفعيل بايبال :Paypal:  و خوادم  :bow_and_arrow:**
  
  https://discord.gg/XENJNEQ
[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`
[${member}]**`);


  });



client.login(process.env.BOT_TOKEN);

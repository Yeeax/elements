const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
client.on('ready', () => {
    console.log(`Logeada!`);
    client.user.setGame("09.07.18 🌹");
    
  
  });

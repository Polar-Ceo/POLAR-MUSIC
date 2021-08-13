let Discord = require('discord.js')
module.exports = (client, message, queue) => {
 
    message.channel.send
 let embed = new Discord.MessageEmbed()
     .setTitle("**Music has stopped**")
    .setDescription(`**<:733988422405980211:868915509939273799> Music has been stopped since I been disconnected **`)
    .setColor("BLUE")
  message.channel.send(embed);
};
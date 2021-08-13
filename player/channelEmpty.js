let Discord = require('discord.js')
module.exports = (client, message, queue) => {

   message.channel.send
 let embed = new Discord.MessageEmbed()
     .setTitle("**Music has stopped**")
    .setDescription(`**<:733988422405980211:868915509939273799> No more members in voice channel leaveing... **`)
    .setColor("BLUE")
  message.channel.send(embed);
};
let Discord = require('discord.js')

module.exports = (client, message, query) => {

    message.channel.send
 let embed = new Discord.MessageEmbed()
     .setTitle("**No results**")
    .setDescription(`**<:733988422405980211:868915509939273799> No results found for ${query} <:733988422405980211:868915509939273799> **`)
    .setColor("BLUE")
  message.channel.send(embed);
};
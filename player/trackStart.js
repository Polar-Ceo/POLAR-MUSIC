 let Discord = require('discord.js')
module.exports = (client, message, track) => {
    message.channel.send
 let embed = new Discord.MessageEmbed()
    .setTitle("**Music now playing**")
    .setDescription(`**<:733988422405980211:868915509939273799>  - Now playing ${track.title} into ${message.member.voice.channel.name}**`)
    .setColor("BLUE")
  message.channel.send(embed);
};
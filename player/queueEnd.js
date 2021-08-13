let Discord = require('discord.js')
module.exports = (client, message, queue) => {

    message.channel.send
 let embed = new Discord.MessageEmbed()
     .setTitle("**No more music in queue !**")
    .setDescription(`**<:733988422405980211:868915509939273799> Music has stopped there is no more music in queue. **`)
    .setColor("BLUE")
  message.channel.send(embed);
};
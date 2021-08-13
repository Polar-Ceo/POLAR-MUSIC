let Discord = require('discord.js')
module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - **You're not in a voice channel !**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - **You are not in the same voice channel !**`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - **No music currently playing !**`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - **The music is already paused !**`);

        const success = client.player.pause(message);

        if (success) message.channel.send

 let embed = new Discord.MessageEmbed()
     .setTitle("**Music paused**")
    .setDescription(`**<:733988422405980211:868915509939273799> Music has not been puased **`)
    .setColor("BLUE")
  message.channel.send(embed);
    },
};
let Discord = require('discord.js')
module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - **You're not in a voice channel !**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} -** You are not in the same voice channel !**`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} -** No music currently playing !**`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send
                let embed = new Discord.MessageEmbed()
     .setTitle("**Volume**")
    .setDescription(`${client.emotes.success} -** Music has been stopped in voice chat ! **`)
    .setColor("BLUE")
  message.channel.send(embed);
    },
};
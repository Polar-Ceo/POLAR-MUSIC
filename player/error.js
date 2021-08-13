module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`<:733988422405980211:868915509939273799>  - There is no music being played in this server !`);
            break;
        case 'NotConnected':
            message.channel.send(`<:733988422405980211:868915509939273799>  - **You are not connected in any voice channel !**`);
            break;
        case 'UnableToJoin':
            message.channel.send(`<:733988422405980211:868915509939273799> - **I am not able to join your voice channel, please check my permissions !**`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`<:733988422405980211:868915509939273799> - **${args[0].title} is not available in your country! Skipping**`);
            break;
        case 'MusicStarting':
            message.channel.send(`<:733988422405980211:868915509939273799> The music is starting...`);
            break;
        default:

    };
};
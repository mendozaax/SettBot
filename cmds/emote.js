module.exports = {
    name: 'emote',
    description: 'test',
    async execute(message, args, client) {
        const emote = client.emojis.cache.find(emoji => emoji.name === args[0]);
        message.channel.send(emote)
    }
}
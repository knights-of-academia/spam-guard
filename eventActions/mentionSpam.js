const config = require('../config.json')

class mentionSpam {
    static async preventMentionSpam(message) {
        if (message.mentions.members.size >= config.mentionThreshold) {
            const embedMessage = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle('🚩 Warning: Mention spam  🚩')
                .setDescription(`Metion Spam  in ${message.channel}`)
                .addField('User', message.author, true)
                .setFooter(message.author.username + '#' + message.author.discriminator, message.author.avatarURL);
            
            const messageChunks = message.content.match(/[\s\S]{1,1024}/g);
            
            for (let chunk of messageChunks) {
                embedMessage.addField('Message', chunk);
            }
            
            message.author.send("Please don't mention a large amount of users in one message.")
            message.delete();
            client.channels.get(config.channels.moderation).send(embedMessage)
        }
    }
}
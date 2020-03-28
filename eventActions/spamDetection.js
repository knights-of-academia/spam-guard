const AntiSpam = require('discord-anti-spam');
const config = require('./config.json');
const spamDetect = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
})

class antiSpam {
    static async preventNormalSpam(message) {
        spamDetect.message(message)
        spamDetect.on("warnAdd", (member) => client.channels.get(config.channels.moderation).send(`${member.user.tag} has been warned for spamming.`));

    }
}
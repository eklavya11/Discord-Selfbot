const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

function randomizer(length, letter) {
    var randomizer = '';
    if (letter.indexOf('0') > -1) randomizer += '0123456789';
    var results = '';
    for (var i = length; i > 0; --i)
    {
    results += randomizer[Math.floor(Math.random() * randomizer.length)];
    }
    return results;
    }
module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.RichEmbed()
    .setColor("#fa8dfc")
    .setTitle(`The Percentages Of ${member.displayName} To Be Cute Is`)
    .setImage("https://media.giphy.com/media/uU8IHAFVDVhks/giphy.gif")
    .setDescription(randomizer(2,'0') + '%')
    .setTimestamp()
    .setFooter("Discord Selfbot By LtUnkn0wn2")
    message.channel.send(embed)
    message.delete();
}
module.exports.command = {
    name: "cutecalc",
}
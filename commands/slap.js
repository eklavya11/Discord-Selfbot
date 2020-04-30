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
    .setTitle(`${member.displayName} Got Slapped`)
    .setImage("https://media2.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif?cid=ecf05e475714d2de78bb72283f7b21436b85d00623d4b80f&rid=giphy.gif")
    .setDescription("You Have Been Slapped")
    .setTimestamp()
    .setFooter("Discord Selfbot By LtUnkn0wn2")
    message.channel.send(embed)
    message.delete();
}
module.exports.command = {
    name: "slap",
}
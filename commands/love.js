const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.RichEmbed()
    .setColor("#ffc0cb")
    .setTitle(`I Love You ${member.displayName}`)
    .setImage("https://i.imgur.com/vC0JirR.jpg")
    .setTimestamp()
    .setFooter("Discord Selfbot By LtUnkn0wn2")
    message.channel.send(embed)
    message.delete();
}
module.exports.command = {
    name: "love",
}
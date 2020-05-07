const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.RichEmbed()
    .setColor("#413E4A")
    .setTitle(`${member.displayName} You Are A Fucking Nigger`)
    .setImage("https://i.imgur.com/HcF1S2L.jpg")
    .setTimestamp()
    .setFooter("Discord Selfbot By LtUnkn0wn2")
    message.channel.send(embed)
    message.delete();
}
module.exports.command = {
    name: "ape",
}
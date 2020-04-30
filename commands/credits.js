const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("#A0FFE6")
    .setTitle(`Discord Selfbot By LtUnkn0wn2`)
    .setDescription("This Public Discord SelfBot Was Created By LtUnkn0wn2")
    .setTimestamp()
    .setFooter("Discord Selfbot By LtUnkn0wn2")
    message.channel.send(embed)
    message.delete();
}
module.exports.command = {
    name: "credits",
}
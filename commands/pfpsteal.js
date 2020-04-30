const Discord = require("discord.js");;
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");


module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    let embed = new Discord.RichEmbed()
    .setColor("#f95d1a")
    .setTitle(`${member.displayName}'s Avatar Is`)
    .setImage(member.user.displayAvatarURL)
    .setTimestamp()
    .setFooter("Discord Selfbot By LtUnkn0wn2")
    message.channel.send(embed)
    message.delete();
};

module.exports.command = {
    name: "avatar",
}
const Discord = require("discord.js")

module.exports.run = async (bot,  message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor("#fd30db")
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} info`, message.guild.iconURL)
    .addField("**Server Name:**", `${message.guild.name}`, true)
    .addField("**Server Owner:**", `${message.guild.owner}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .setTimestamp()
    .setFooter("Discord Selfbot By LtUnkn0wn2")
    message.channel.send(sEmbed);
    message.delete();
}

module.exports.command = {
    name: "serverinfo",
}
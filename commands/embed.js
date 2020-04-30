const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor("##b93afd")
    .setTitle(args.join(" "))
    message.channel.send(embed)
    message.delete();
}
module.exports.command = {
    name: "embed",
}
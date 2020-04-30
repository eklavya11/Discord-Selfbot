const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
  .setColor('#1aff25')
  .setTitle('LtUnkn0wn2 SelfBot')
  .setThumbnail('https://cdn.discordapp.com/avatars/216204476539863040/b4070a7401bfb9d5eb1ab70df6920fa2.png?size=256')
  .setAuthor('LtUnkn0wn2', 'https://cdn.discordapp.com/avatars/216204476539863040/b4070a7401bfb9d5eb1ab70df6920fa2.png?size=256')
  .setDescription("All Command That This Shitty Bot Offer")
  .addField('**Commands For Info**', 'info', false)
  //.addField('**Commands For Moderation**', 'mod', false)
  .addField('**Commands For Fun**', 'fun', false)
  .addField('**Commands For Miscellaneous**', 'misc', false)
  .setTimestamp()
  .setFooter("Discord Selfbot By LtUnkn0wn2")
  message.channel.send(embed)
  message.delete();
}
module.exports.command = {
    name: "help",
}
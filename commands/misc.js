const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
  .setColor('#1aff25')
  .setTitle('LtUnkn0wn2 SelfBot')
  .setThumbnail('https://cdn.discordapp.com/avatars/216204476539863040/b4070a7401bfb9d5eb1ab70df6920fa2.png?size=256')
  .setAuthor('LtUnkn0wn2', 'https://cdn.discordapp.com/avatars/216204476539863040/b4070a7401bfb9d5eb1ab70df6920fa2.png?size=256')
  .setDescription("All The Command For Miscellaneous")
  .addField('**Generate A Random Discord Nitro Link**', 'nitro', false)
  .addField('**Generate A Random Discord Token**', 'token', false)
  .addField('**Generate A Random prnt.sc Screen**', 'print', false)
  .setTimestamp()
  .setFooter("Discord Selfbot By LtUnkn0wn2")
  message.channel.send(embed)
  message.delete();
}
module.exports.command = {
    name: "misc",
}
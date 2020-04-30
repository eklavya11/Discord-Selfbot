const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
  .setColor('#1aff25')
  .setTitle('LtUnkn0wn2 SelfBot')
  .setThumbnail('https://cdn.discordapp.com/avatars/216204476539863040/b4070a7401bfb9d5eb1ab70df6920fa2.png?size=256')
  .setAuthor('LtUnkn0wn2', 'https://cdn.discordapp.com/avatars/216204476539863040/b4070a7401bfb9d5eb1ab70df6920fa2.png?size=256')
  .setDescription("All The Command For Info")
  .addField('**Show Description Of The User**', 'userinfo', false)
  .addField('**Show How Long the Bot Has Been On**', 'uptime', false)
  .addField('**Shows The Server Description**', 'serverinfo', false)
  .addField('**Show the Geolocation of the Ip**', 'ip', false)
  .addField('**Show the Information of the Instagram**', 'insta', false)
  .addField('**Steal User Avatar**', 'avatar', false)
  .setTimestamp()
  .setFooter("Discord Selfbot By LtUnkn0wn2")
  message.channel.send(embed)
  message.delete();
}
module.exports.command = {
    name: "info",
}
const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const snekfetch = require("snekfetch");



module.exports.run = async (bot, message, args) => {
    const name = args.join(" ");
    snekfetch.get(`https://www.instagram.com/${name}/?__a=1https://www.instagram.com/${name}/?__a=1`).then(r => {
        const account = r.body.graphql.user
        let embed = new Discord.RichEmbed()
        .setColor('#c32aa3')
        .setAuthor(name, account.profile_pic_url)
        .setThumbnail(account.profile_pic_url)
        .setTitle(`${name} Instagrams Information`) 
        .addField('**Verified: **', account.is_verified, true)
        .addField('**Followers: **', account.edge_followed_by.count, true)
        .addField('**Followed: **', account.edge_follow.count, true)
        .addField('**Private: **', account.is_private, true)
        .addField('**Highlights: **', account.highlight_reel_count, true)
        .addField('**Account ID: **', account.id, true)
        .setTimestamp()
        .setFooter("Discord Selfbot By LtUnkn0wn2")
        message.channel.send(embed)
    });
    message.delete();
}
module.exports.command = {
    name: "insta",
}
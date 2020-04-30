const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");
const snekfetch = require("snekfetch");



module.exports.run = async (bot, message, args) => {
    const ip = args.join(" ");
    snekfetch.get(`http://free.ipwhois.io/json/${ip}`).then(r => {
        let embed = new Discord.RichEmbed()
        .setColor('#1aff25')
        .setTitle(`${ip} Information`)
        .addField('**City: **', r.body.city, true)
        .addField('**Region: **', r.body.region, true)
        .addField('**Continent: **', r.body.continent, true)
        .addField('**Latitude: **', r.body.latitude, true)
        .addField('**Longitude: **', r.body.longitude, true)
        .addField('**ISP: **', r.body.isp, true)
        .addField('**Organization: **', r.body.org, true)
        .addField('**Timezone: **', r.body.timezone_name, true)
        .addField('**Country: **', r.body.country, true)
        .addField('**ASN: **', r.body.asn, true)
        .addField('**Type: **', r.body.type, true)
        .addField('**Currency: **', r.body.currency, true)
        .setTimestamp()
        .setFooter("Discord Selfbot By LtUnkn0wn2")
        message.channel.send(embed)
    }) 
    message.delete();
}

module.exports.command = {
    name: "ip",
}
const Discord = require("discord.js");

            module.exports.run = async(bot, message, args) =>{
                message.channel.send("Pinging...").then(m => {
                    let ping = m.createdTimestamp - message.createdTimestamp
                    let choices = ["Pinging"]
                    let response = choices[Math.floor(Math.random() * choices.length)]
                    m.edit(`${response}: Bot Latency: \`${ping}\`, API Latency: \`${Math.round(bot.ping)}\``)
                })
                message.delete();
            }

module.exports.command = {
    name: "ping"
}
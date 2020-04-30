const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

function randomizer(length, letter) {
    var randomizer = '';
    if (letter.indexOf('0') > -1) randomizer += '0123456789';
    if (letter.indexOf('A') > -1) randomizer += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (letter.indexOf('a') > -1) randomizer += 'abcdefghijklmnopqrstuvwxyz';
    if (letter.indexOf(`d`) > -1) randomizer += `.`
    var results = '';
    for (var i = length; i > 0; --i)
    {
    results += randomizer[Math.floor(Math.random() * randomizer.length)];
    }
    return results;
    }
module.exports.run = async (bot, message, args) => {
    //message.channel.send(randomizer(3,'0aA') + `.` + randomizer(11,'0aA') + `_` + randomizer(41,'0aA') + `_` + randomizer(13,'0aA') + `-` + randomizer(16,'0aA'));
    //message.channel.send(randomizer(24,'0aA') + `.` + randomizer(6,'0aA') + `.` + randomizer(27,'0aA'));
    ///message.channel.send(`NzAy` + randomizer(20,'0aA') + `.` + randomizer(6,'0aA') + `.` + randomizer(27,'0aA'));
    message.channel.send(`NzA` + randomizer(21,'0aA') + `.` + randomizer(6,'0aA') + `.` + randomizer(27,'0aA'));
    message.delete();
}
module.exports.command = {  
    name: "token",
}
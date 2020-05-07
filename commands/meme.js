const Discord = require("discord.js");
const randompuppy = require("random-puppy")


module.exports.run = async (bot, message, args) => {
    const subreddits = [
        "meme",
        "animemes",
        "MemesOfAnime",
        "animememes",
        "AnimeFunny",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "techsupportanimals",
        "meirl",
        "me_irl",
        "2meirl4meirl",
        "AdviceAnimals"
      ] ;
    const random = subreddits[Math.floor(Math.random() * subreddits.length)];

    const img = await randompuppy(random);
    const embed = new Discord.RichEmbed()
    .setColor("#4cfab8")
    .setImage(img)
    .setFooter(`Form /r/${random}`)
    .setImage(`https://reddit.com/r/${random}`)
    .setTimestamp()
    message.channel.send(embed)
    message.delete();
}
module.exports.command = {
    name: "meme",
}
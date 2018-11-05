const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('EraKnight V2').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});

bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content == "ip"){
            msg.reply('EraKnight V2 Soon.....')
    }
    if (msg.content === "site"){
        msg.channel.send("En cours.... de développement")
        console.log("Une personne a demandé pour aller sur ton site.")
    }
    if(msg.content === "info") {
module.exports.run = async (bot, message, args) => {
        let sicon = message.guild.iconURL;
        var embed = new Discord.RichEmbed()
       .setDescription("Information du Discord")
       .setThumbnail(sicon)
       .addField("Nom du Discord", msg.guild.name)
       .addField("IP du serveur", "EraKnight Soon....")
       .addField("Utilisateurs sur le discord", msg.guild.memberCount)
       .setColor("0x0000FF")
    msg.channel.sendEmbed(embed)
    }

    module.exports.help = {
      name:"serverinfo"
    }
});
    
bot.login(token); //a garder en version heroku

const Discord = require('discord.js');
const token = process.env.token // a garder en version heroku
const bot = new Discord.Client();

var prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('| EraKnight v2 |').catch(console.error)
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
    if (msg.content === "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Information du Discord!")
        .addField("Nom du Discord:", msg.guild.name)
        .addField("IP du serveur:", "EraKnight Soon....")
        .addField("Nombre de membres:", msg.guild.members.size)
        .addField("Nombre de Salons:", msg.guild.channels.size)
        .setFooter("Info - EraKnight")
        msg.channel.send(info_embed)
        console.log("Un utilisateur à éffectué la commande d'information!")
    }
    module.exports.run = async (bot, message, args) => {
       let bicon = bot.user.displayAvatarURL
       let botembed = new Discord.RichEmbed()
       .setTitle("Information du Bot")
       .setColor("#ffd700")
       .setTimestamp()
       .setThumbnail(bicon)
       .addField("EraKnight", bot.user.username)
       .addField("Created On", bot.user.createdAt)
       .addField("Crée par", "GarryIII#9253");
       return message.channel.send(botembed);
    }


module.exports.help = {
    name: "Info"
    }
});
    
bot.login(token); //a garder en version heroku

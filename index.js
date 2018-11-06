const Discord = require('discord.js');
const token = process.env.token // a garder en version heroku
const bot = new Discord.Client();

var prefix = ("?");

bot.on("ready", () => {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setPresence({
        game: { 
            name: '| EraKnight v2 |',
            type: 0
        },
        status: 'online'
    })
})
bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply("Salutation.")
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
        .setFooter("Info - EraKnight - 2018/2019")
        msg.channel.send(info_embed)
        console.log("Un utilisateur à éffectué la commande d'information!")
    }
    if (msg.content == "prefix + infobot") {
       var bicon = bot.user.displayAvatarURL
       var bot_embed = new Discord.RichEmbed()
       .setTitle("Information du Bot")
       .setColor("#ffd700")
       .setTimestamp()
       .setThumbnail(bicon)
       .addField("Nom du bot", bot.user.username)
       .addField("Crée le", bot.user.createdAt)
       .addField("Crée par", "GarryIII#9253");
       msg.channel.send(bot_embed);
    }
});
    
bot.login(token); //a garder en version heroku

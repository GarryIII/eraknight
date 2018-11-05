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
    if (msg.content === "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Information du Discord!")
        .addField(" :robot: EraKnight :", `${client.user.tag}`, true)
        .addField("Déscriminateur du bot :hash:", `#${client.user.descriminator}`)
        .addField("ID :id: ", `${client.user.id}`)
        .addField("Nombre de membres", msg.guild.members.size)
        .addField("Nombre de Salons", msg.guild.channels.size)
        .setFooter("Info - EraKnight")
        msg.channels.sendMessage(info_embed)
        console.log("Un utilisateur à éffectué la commande d'information!")
    }
});
    
bot.login(token); //a garder en version heroku

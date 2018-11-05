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
       var embed = new Discord.RichEmbed()
       .setDescription("Information du Discord")
       .addField("Nom du Discord", msg.guild.name)
       .addField("IP du serveur", "EraKnight Soon....")
       .addField("Utilisateurs sur le discord", msg.guild.memberCount "Joueur")
       .setColor("0x0000FF")
    msg.channel.sendEmbed(embed)
    }
    module.exports.run = async (bot, message, args) => {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Couldn't find user.");
        let rreason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#15f153")
        .addField("Joueur Signaler", `${rUser} with ID: ${rUser.id}`)
        .addField("Signaler par", `${message.author} with ID: ${message.author.id}`)
        .addField("Salon", message.channel)
        .addField("Heure", message.createdAt)
        .addField("Raison", rreason);

        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);

    }
 
    module.exports.help = {
        name: "report"
    }
});

bot.login(token); //a garder en version heroku

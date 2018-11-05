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
    if (commandKey == "info") {
        var embed = new Discord.RichEmbed();
        embed.addField("EraKnight", `${msg.guild.name}`, true)
        .addField("Serveur ID", `${msg.guild.id}`, true)
        .setColor(randomcolor())
        .setFooter(' ', ' ')
        if (msg.guild.iconURL) embed.setThumbnail(`${msg.guild.iconURL}`);
        if (msg.author.avatarURL) embed.setURL(`${msg.author.avatarURL}`);
        embed.setTimestamp()
        .addField('Admin du Discord', `${msg.guild.owner.user.username}`, true)
        .addField('Crée le', `${moment(msg.guild.createdAt).format('MM.DD.YY')}`, true)
        .addField('Roles', `${msg.guild.roles.filter(r => r.name).size}`, true)
        .addField('Verification Level', `${msg.guild.verificationLevel}`, true)
        .addField('Region', `${msg.guild.region}`, true)
    msg.channel.sendEmbed(
        embed, {
           disableEveryone: true
    }
 });
    
bot.login(token); //a garder en version heroku

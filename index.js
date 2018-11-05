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
        embed.addField("EraKnight", `${message.guild.name}`, true)
           .addField("Serveur ID", `${message.guild.id}`, true)
          .setColor(randomcolor())
          .setFooter(' ', ' ')
          if (message.guild.iconURL) embed.setThumbnail(`${message.guild.iconURL}`);
          if (message.author.avatarURL) embed.setURL(`${message.author.avatarURL}`);
      embed.setTimestamp()
          .addField('Admin du Discord', `${message.guild.owner.user.username}`, true)
          .addField('Crée le', `${moment(message.guild.createdAt).format('MM.DD.YY')}`, true)
          .addField('Roles', `${message.guild.roles.filter(r => r.name).size}`, true)
          .addField('Verification Level', `${message.guild.verificationLevel}`, true)
          .addField('Region', `${message.guild.region}`, true)
      message.channel.sendEmbed(
          embed, {
              disableEveryone: true
              
    }
  );
} else
    
});
    
bot.login(token); //a garder en version heroku

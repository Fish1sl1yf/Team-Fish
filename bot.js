const Discord = require("discord.js");

const token = "process.env.BOT_TOKEN";

var bot = new Discord.Client();

var prefix = "/";

var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "How about you shut up?",
  "Get Rekt",
  "How am i supposed to know?",
  "Idk, what do you think?",
  "Chances are good",
  "Idk",
  "Sure",
  "Really",
  "I wonder How",
  "Nice",
  "Wow",
  "Im sure",
  "Of course!",
  "Can you leave me alone please?",
];

bot.on("ready", function() {
    bot.user.setGame('Music|/help for help')
    console.log("I am online now try some commands");

});

bot.on("message",function(message){

    if (message.author.equals(bot.user)) return;
    if (message.content.startsWith(prefix + 'ping'))
        message.channel.sendMessage("Ping?").then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`));
    if (message.content.startsWith(prefix + 'game'))
        message.channel.sendMessage("?playing /help for help");
    if (message.content.startsWith(prefix + 'invitebot'))
        var EEmbed = new Discord.RichEmbed()
        .addField("Invite", "ADS Bot from [HERE](https://discordapp.com/oauth2/authorize?&client_id=327736480103661569&scope=bot&permissions=0)")
        .setAuthor("ADS Bot")
        .setColor(0x2ECC71)
        .setThumbnail(message.author.avatarURL)
        message.author.sendEmbed(EEmbed);
    if (message.content.startsWith(prefix + 'suicide'))
        message.reply("Killed Themselves Rest In Peace ");
    if (message.content.startsWith(prefix + '8ball'))
        message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    if (message.content.startsWith(prefix + 'triggered'))
        message.channel.sendMessage("https://giphy.com/gifs/ZEVc9uplCUJFu");
    if (message.content.startsWith(prefix + 'info'))
         var Embed = new Discord.RichEmbed()
        .addField("Hello", "My name is ravveen#8655")
        .addField("Owner/Creator", "GreatFisshy#3746")
        .addField("Head-Admin", "no one tbh")
        .addField("For Help", "Do /help")
        .addField("Co-Bot", "none....")
        .addField("JOIN", "Minecraft is BAE [HERE](https://discord.gg/ubP9kt4)")
        .setAuthor("Ravveen bot")
        .setColor(0x2ECC71)
        .setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(Embed);
    if (message.content.startsWith(prefix + 'help'))
          var RichEmbed = new Discord.RichEmbed()
        .addField("Prefix", "/")
        .addField("/ping", "Ping of you and the Bot")
        .addField("/info", "To Know about the Bot")
        .addField("/8ball", "Ask the Bot some Questions If you want :smirk:")
        .addField("/help", "To show this box")
        .addField("/play", "To play some songs")
        .addField("/skip", "To skip the current Song")
        .addField("/summon", "To summon the Bot in a Voice Channel If you want to play some music")
        .addField("/disconnect", "To disconnect the Bot")
        .addField("/pause", "to stop the music")
        .addField("/suicide", "Kill YourSelf")
        .addField("/triggered", "**TRIGGERED**")
        .addField("/invitebot", "To invite ADS Bot :smile:")
        .addField("/volume", "To change the volume")
        .addField("/skip", "to skip the music")
        .addField("/queue", "to see the queue")
        .addField("/restart", "to restart the bot")
        .addField("/resume", "to resume the song that you paused")
        .addField("/clean", "to clean bot messages")
        .setAuthor("Ravveen bot")
        .setColor(0x2ECC71)
        message.author.sendEmbed(RichEmbed);
});
bot.login(process.env.BOT_TOKEN);

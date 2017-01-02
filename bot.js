var Discord = require ("discord.js");

var bot = new Discord.Client();

var prefix = "/";







bot.on("message", msg => {
    if (msg.content.startsWith("salut")) {
        msg.channel.sendMessage("salut à toi !");
    }
    if (msg.content.startsWith(prefix + "ping")) {
        msg.channel.sendMessage("Pong");
    }

    if (msg.content.startsWith(prefix + "help"))
    {
      msg.channel.sendMessage("Liste des commandes:");
      msg.channel.sendMessage(prefix + " help");
      msg.channel.sendMessage(prefix + "ping");
    }




});

bot.on('ready', () => {
  console.log('Bot On');
});

bot.login("token");

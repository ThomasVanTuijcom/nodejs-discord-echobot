const Discord = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  // Vérifier si le message n'est pas envoyé par le bot lui-même
  if (msg.author.bot) return;

  // Répondre "je suis là" lorsque l'utilisateur écrit "ici"
  if (msg.content.toLowerCase() === 'ici') {
    msg.reply('je suis là');
  }
});

client.login(process.env.TOKEN); //login bot using token

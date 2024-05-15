// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const keep_alive = require('./keep_alive.js')
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
/*
----------------------------------------------------------------------------------------
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
*/
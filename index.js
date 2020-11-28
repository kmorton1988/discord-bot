const Discord = require('discord.js');
const client = Discord.Client();
const Fetch = require('fetch.js)');
const check = Fetch.Data();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login('')
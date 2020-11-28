const Discord = require('discord.js');
const client = Discord.Client();
const config = require('config.js')
const token = config.token;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('pong');
	}
});

client.login(token)
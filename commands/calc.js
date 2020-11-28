module.exports = {
	name: 'calc',
	description: 'calculator, maybe?',
	execute(message, args) {
		let total = 0;

		for (let i = 0; i < args.length; i++) {
			total = total + parseInt(args[i]);
		}
		message.channel.send(`The Total is ${total}`);
	},
};
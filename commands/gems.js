module.exports = {
	name: 'gems',
	args: true,
	db: true,
	usage: '<username> <5 or 10> <crew>',
	description: 'Add a submission for gem contribution',
	execute(message, args) {
		console.log(message + args);
	},
};
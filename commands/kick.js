module.exports = {
	name: 'kick',
	description: 'Đã đá 1 bạn ra khỏi server!',
	execute(message) {
		const member = message.mentions.members.first();

		if (!member) {
			return message.reply('You need to mention the member you want to kick');
		}

		if (!member.kickable) {
			return message.reply('nó quyền cao hơn, kick bằng niềm tin à ?');
		}

		return member
			.kick()
			.then(() => message.reply(`${member.user.tag} đã bị sút khỏi server.`))
			.catch(error => message.reply('Kick bằng niềm tin.'));
	},
};
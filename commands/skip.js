module.exports = {
	name: 'skip',
	description: 'Đã bỏ qua bài hiện tại!',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
		if (!serverQueue) return message.channel.send('Đéo có bài hát thì skip ăn *** à!');
		serverQueue.connection.dispatcher.end();
	},
};
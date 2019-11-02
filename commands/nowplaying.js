module.exports = {
	name: 'nowplaying',
	description: 'Bài hiện tại là.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Không có bài hát đang phát.');
		return message.channel.send(`Now playing: ${serverQueue.songs[0].title}`);
	},
};
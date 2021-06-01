const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Gen Help')
	.setDescription('Available Commands: \n `/Token` \n `/Nitro`  \n `/Disney` \n `/Netflix` \n `/Minecraft` \n `/Origin` \n `/Steam` \n `/Emails` \n `/NordVPN` \n `/Crunchyroll (Broken)` \n `/Invite`')

.setTimestamp()
.setImage ("https://cdn.discordapp.com/attachments/848298340491722815/848319085288751125/standard_7.gif")

message.channel.send(embed);
}
module.exports.help = {
  name: 'help'
}
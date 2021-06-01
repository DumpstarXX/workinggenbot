const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Invite Me')
	.setDescription(`Want to have the same bot as mine in you server? \n Just create an ticket and say u want to buy an invite, here is price list \n
  1 day = 1$ \n 1 week = 3$ \n 1 month = 7$ \n Lifetime = 10$ \n`)
  .setImage("https://cdn.discordapp.com/attachments/846824240027271198/848521702824083476/standard_5.gif")


message.channel.send(embed);
}
module.exports.help = {
  name: 'invite'
}
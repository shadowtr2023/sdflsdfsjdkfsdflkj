const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    
    
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':dikkat:Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
    if (!args[0]) return message.channel.send(':dikkat:**Sa-as yazısını açmak için `r!sa-as aç veya kapat`**')
    
    if (args[0] == 'aç') {
        db.set(`saas_${message.guild.id}`, 'açık')
        message.channel.send(`**Başarıyla \`sa-as Sistemini\` Açtınız, Artık Bot \`sa\` Yazıldığında Cevap Verecek.**`)
        
    }
    if (args[0] == 'kapat') {
        db.set(`saas_${message.guild.id}`, 'kapali')
        
        message.channel.send(`:tik:**Başarıyla \`sa-as Sistemini\` Kapattınız, Artık Bot \`sa\` Yazıldığında Cevap Vermeyecek.**`)
        
    }
    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['saas'],
    permLevel: 3
};

exports.help = {
    name: 'sa-as',
    description: 'Selamün aleyküm, Aleyküm selam',
    usage: 'r!sa-as'
};
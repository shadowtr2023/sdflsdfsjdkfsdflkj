const Discord = require('discord.js');
const database = require('quick.db');
const fs = require('fs');

exports.run = async (client, message, args) => {
  // Ayarlar dosyasını oku
  let rawdata = fs.readFileSync('ayarlar.json');
  let ayarlar = JSON.parse(rawdata);
  let premiumIDs = ayarlar.premiumIDs; // Premium kullanıcı ID'leri

  // Kullanıcının belirlediğiniz premium ID listesinde olup olmadığını kontrol et
  if (!premiumIDs.includes(message.author.id)) {
    const premiumEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle('Premium Üye Değilsiniz')
      .setDescription('Bu komutu kullanabilmek için [Satın Al](https://discord.gg/4XeWqvYMYJ) .')
      .setImage('https://media.discordapp.net/attachments/1116091586657407076/1149387613577412608/Picsart_23-09-07_19-50-01-287.jpg');

    return message.channel.send(premiumEmbed);
  }

  // Kullanıcının rolü yönetici olup olmadığını kontrol et
  if (!message.author.hasPermission("ADMIN")) {
    return message.reply("Bu komutu kullanabilmek için yönetici olman gerekiyor.");
  }

  if (!message.mentions.roles.first()) return message.reply('Ayarlamak istediğiniz Kadın rolünü etiketlemelisiniz!');

  const role = message.mentions.roles.first();

  // Eğer kullanıcı gerekli role sahipse, işlemi gerçekleştir
  database.set(`kayıt-kadın.${message.guild.id}`, role.id);

  const successEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Rol Başarıyla Ayarlandı!')
    .setFooter('Rolü değiştirmek istersen tekrar etiketlemelisin.')
    .setDescription(`» Kadın Rolü: **${role.name}** olarak ayarlandı!`);

  return message.channel.send(successEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y-kayıt-kadın', 'y-k-kadın', 'y-k-k', 'y-kayıtkadın', 'ykayıt-kadın'],
  permLevel: 1
};

exports.help = {
  name: 'y-kayıt-kadın'
};

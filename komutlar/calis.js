const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');
const fs = require('fs');

exports.run = async (client, message) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let times = await db.fetch(`çalışmasüresi_${message.author.id}`);
  let day = 86400000; // 24 saat in milliseconds

  if (times !== null && day - (Date.now() - times) > 0) {
    let time = ms(day - (Date.now() - times));
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setDescription(
          `⏱ Çalışmak için ${
            time.minutes ? time.minutes + ' dakika,' : ''
          } ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'komutu tekrar gir!'}`
        )
    );
    return;
  }

  let works = [
    'Süpermarkette',
    "Part-time'da",
    'Fırında',
    'Fabrikada',
    'Galeride',
    'Sanayide',
    'Ayakkabı Mağazasında',
    'Teknoloji mağazasında',
  ];
  var work = works[Math.floor(Math.random() * works.length)];

  // Ayarlar dosyasını oku
  let ayarlar = JSON.parse(fs.readFileSync('ayarlar.json', 'utf8'));
  let premiumIDs = ayarlar.premiumIDs; // Premium kullanıcı ID'leri

  // ID kontrolü ve para miktarı belirleme
  let moneys;
  if (premiumIDs.includes(message.author.id)) {
    moneys = rastgeleMiktar(50000, 60000); // Premium para aralığı
  } else {
    moneys = rastgeleMiktar(2000, 5000); // Normal para aralığı
  }

  message.channel.send(
    new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor('YELLOW')
      .setDescription(`${work} çalıştın ve ${moneys} 💸 kazandın!`)
  );

  db.set(`çalışmasüresi_${message.author.id}`, Date.now());
  db.add(`para_${message.author.id}`, moneys);
};

exports.conf = {
  enabled: true,
  aliases: ['calis', 'maaş'],
};

exports.help = {
  name: 'çalış',
};

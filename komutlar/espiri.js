const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send("Espri yükleniyor.").then(message => {
    var codwaespri = [
     "Almanya'da Almanlar yaşıyorsa, Sakarya'da sakarlar mı yaşar?",
      "-File çorap aldım.\n-File niye aldın? Kendine alsaydın ya",
      "Kar üzerinde yürüyen adama ne denir. Karabasan.",
      "- Fransız ihtilali neye karşı yapılmıştır\n-Sabaha karşı",
      "Gidenin arkasına bakmayın yoksa geleni göremezsiniz.",
      "-Sen o çeteyi tanıyor musun?-\nHangi çeteyi\n-Peçeteyi.",
      "+Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!",
      "+Kocanızla ortak özelliğiniz ne? \n-Aynı gün evlendik.",
      "+Evladım ödevini neden yapmadın? \n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.",
      "+Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.",
      "En iyi yemek yapan Ceren hangisidir?\nTenceren.",
      "Çok makbule geçtişimdi de Ayşe geçiyor.",
      "Yılanlardan korkma, yılmayanlardan kork.",
      "+Baykuşlar vedalaşırken ne der? \n-Bay bay baykuş.",
      "-Alinin selamı var.\n-Hangi Ali?\n-Şehirlerarası Otobüs termin-ali",
      "Aaa siz çok terlemişsiniz durun size terlik getireyim.",
      "-Örümcek adam ağ atamıyormuş,neden?-Çünkü ağ bağlantısı kopmuş.",
      "-4. Murat neden intihar etmiş?\n- İlk 3'e giremediği için.",
      "Adam yüz bulmuş, yüzsüzler bizim değil demişler.",

      "Sana bi kıllık yapayım, kıllarını koyarsın.",

"Kar üzerinde yürüyen adama ne denir. Karabasan.",

"Bir adamın ayakları kokmuş kolları linyit.",

"Adamın biri yarın öleceğim demiş. Yarmışlar ölmüş.",

"Acıkan var mı ya?  Yok, bizde tatlı kan var.",

"Çalmak fiilinin gelecek zamanı nedir? Hapse girmek.",
      
      "Ampulü Edison buldu ama parasını niye biz ödüyoruz.",

"Fransızların nesi eksiktir? FRANları tabi ki!",

"Sinemada on dakika ara dedi, aradım aradım açmadı.",

"Geçen gün bir taksi çevirdim; hala dönüyor!",

"Asansör bozuktur en yakın asansör karşı apartmandadır!",
      
     " Korkunun ecele faydası yoktur, sadece iç çamaşırları kirletir.",

"Uzun muma maksimum, kısa muma minimum denir.",

"Ders çalışırken müzik dinleyemiyorum, ders dikkatimi dağıtıyor.",  

"Hadi oyun oynayalım. Vazgeçtim, oymadan oynayalım!",

"Dün bir Amerikalı gördüm. Abi nasıl İngilizce konuşuyor görecen.",
      
     "ama  Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek’le olayım demiş.",

"Ayda 5 milyon kazanmak ister misin? Evet. O zaman Ay’a git.",

"Tatlı yiyip, tatlı konuşuluyorsa; bundan sonra mantı yiyip mantıklı konuşacağız.",

"4 kişilik bir masa alçaktım vazgeçtim, kişiliksiz bir masa aldım!",

"Sinirlenince telefonu yavaşça yere bırakıp kendimi son sürat duvara fırlatıyorum.",

"İyi ki İtalya da doğmamışız! Neden? Çünkü İtalyanca bilmiyoruz!",

"Her yerim tutuldu bir kulaklarım tutulmadı. O zaman bende onu kiraya veririm!",

"Soru: En hızlı sayı hangisidir. Cevap: 10. Çünkü onun arabası var!",

"Bir adam intihar edecekmiş, vaz geçmiş. İki adam intihar edecekmiş, were geçmiş!",

"Tuzu uzatır mısın? Tuuuuuuuuuuuz Gerizekalı ya kalk git sofradan.",

"Bizim arkadaş ortamında paranın lafı olmaz. Niye ki?  Çünkü hiçbirimizde para yok.",

"3 Japon sırayla uçaktan atlamış. Japonlar ölmüş, sıra ise kırılmış!",

"Komşunun oğlu senden daha iyi paylaşım yapıyo. Anne burada bari rahat bırak beni: D",

"Tarkan: Kim yaptı Kurt  Kurt: hav hav hav hav  Tarkan: Hain Kostok",

"‎Sana seni çok sevdiğimi söylemiş miydim? Hayır. Sevmediğimdendir. Sevsem söylerdim.",

"Okeyde kıza elin nasıl dedim. Ojeli dedi.  Ben Şoka girdim. O Migrosa",

"Babamı sahura kaldırmayı unuttuk, anneme masada ne eksik diyorum tuzluk mu diyor.",

"Osmanlıda kimseye borç takamıyordun mesela, sikke sikke ödüyodun…",

"Bu işler öyle telefonda olmaz, yüz yüze görüşelim. Tamam, o zaman görüntülü arıyorum.",

"Uzakdoğu dövüş sanatlarında ustayımdır. Aikido, tekvando ve avoka do!",

"Tam karakterin oturacakken sandalyeyi çekmişler sanki.",

"Masada hangi örtü kullanılmaz? Bitki Örtüsü.",
     
      "BU ŞEKİLDE ARTTIRABİLİRSİNİZ",
      
    ];
    var espri = codwaespri[Math.floor(Math.random() * codwaespri.length)];
    message.edit(`${espri}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["espiri", "espri-yap", "yap-espri", "yapbi-espri"],
  permLevel: 0
};

exports.help = {
  name: "espri",
  description: "codwa & ottomancode",
  usage: "espri"
};
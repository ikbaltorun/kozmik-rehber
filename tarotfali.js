// 22 Büyük Arkana (Major Arcana) Kartlarının Tam Listesi ve Gerçek Yorumları
const tarotCards = [
    { name: "The Fool (Meczup)", image: "mecnun.jpg", meaning: "Yeni başlangıçlar, masumiyet ve risk alma zamanı. Önündeki uçuruma değil, hayallerine odaklan." },
    { name: "The Magician (Büyücü)", image: "buyucu.jpg", meaning: "Tüm araçlar elinde. Yeteneklerini kullanarak imkansızı başarma gücüne sahipsin." },
    { name: "The High Priestess (Azize)", image: "azize.jpg", meaning: "Sezgilerin konuşuyor. Bilgiye mantıkla değil, iç sesinle ulaşma vaktin." },
    { name: "The Empress (İmparatoriçe)", image: "imparatorice.jpg", meaning: "Bereket, doğurganlık ve sevgi. Yaratıcılığının meyvelerini toplama dönemindesin." },
    { name: "The Emperor (İmparator)", image: "imparator.jpg", meaning: "Otorite ve yapı kurma. Hayatında disiplin ve mantıklı bir düzen ihtiyacı var." },
    { name: "The Hierophant (Aziz)", image: "aziz.jpg", meaning: "Gelenekler, ruhsal rehberlik ve toplumsal kurallar. Bilge birinden tavsiye alabilirsin." },
    { name: "The Lovers (Aşıklar)", image: "asiklar.jpg", meaning: "Uyum, birliktelik ve çok önemli bir tercih. Kalbin ve aklın arasında denge kurmalısın." },
    { name: "The Chariot (Araba)", image: "savasarabasi.jpg", meaning: "İrade gücüyle kazanılan zafer. Karşıt güçleri kontrol altına al ve hedefine odaklan." },
    { name: "Strength (Güç)", image: "guc.jpg", meaning: "Fiziksel değil, ruhsal güç. Sabır ve nezaketle en vahşi engelleri bile dize getirebilirsin." },
    { name: "The Hermit (Ermiş)", image: "ermis.jpg", meaning: "İçsel ışığını bulmak için yalnızlık. Cevaplar dışarıda değil, senin derinliklerinde." },
    { name: "Wheel of Fortune (Kader Çarkı)", image: "kadercarki.jpg", meaning: "Kaderin dönüşü. Kaçınılmaz değişimler başlıyor, şans kapını çalabilir." },
    { name: "Justice (Adalet)", image: "adalet.jpg", meaning: "Hak ve hukuk. Ne ekersen onu biçersin; kararlarının sorumluluğunu alma vaktidir." },
    { name: "The Hanged Man (Asılan Adam)", image: "asilanadam.jpg", meaning: "Farklı bir bakış açısı. Fedakarlık yapman veya bir süre durup beklemen gerekebilir." },
    { name: "Death (Ölüm)", image: "olum.jpg", meaning: "Büyük dönüşüm. Bir devir kapanıyor, yenisi için yer açılıyor. Direnmeyi bırak." },
    { name: "Temperance (Denge)", image: "denge.jpg", meaning: "Ilımlılık ve uyum. Zıtlıkları birleştirerek huzuru bulma ve sabırlı olma zamanı." },
    { name: "The Devil (Şeytan)", image: "seytan.jpg", meaning: "Bağımlılıklar ve gölge yanlar. Seni kısıtlayan zincirler aslında sandığın kadar güçlü değil." },
    { name: "The Tower (Yıkılan Kule)", image: "yikilan-kule.jpg", meaning: "Ani ve sarsıcı değişim. Sahte temeller yıkılıyor ki gerçek olanlar inşa edilebilsin." },
    { name: "The Star (Yıldız)", image: "yildiz.jpg", meaning: "Umut, ilham ve şifa. En karanlık geceden sonra parlayan yıldız senin yolunu aydınlatacak." },
    { name: "The Moon (Ay)", image: "ay.jpg", meaning: "Bilinçaltı, rüyalar ve illüzyonlar. Görünene aldanma, sezgilerin seni gerçeğe götürecektir." },
    { name: "The Sun (Güneş)", image: "gunes.jpg", meaning: "Mutluluk, başarı ve canlılık. Her şeyin netleştiği, neşe dolu bir dönem başlıyor." },
    { name: "Judgement (Mahkeme)", image: "mahkeme.jpg", meaning: "Uyanış ve vicdan muhasebesi. Geçmişi değerlendir ve yeni bir hayata adım at." },
    { name: "The World (Dünya)", image: "dunya.jpg", meaning: "Tamamlanma, bütünlük ve başarı. Uzun bir yolculuğun sonuna geldin, artık kutlama zamanı." }
];

function startReading() {
    const count = parseInt(document.getElementById("cardCount").value);
    const cardsArea = document.getElementById("cardsArea");
    const resultDiv = document.getElementById("result");

    // Temizlik ve başlangıç animasyonu
    cardsArea.innerHTML = "";
    resultDiv.innerHTML = "";
    resultDiv.style.display = "block";

    // Kartları rastgele karıştır
    let shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, count);

    let interpretationText = "";

    selected.forEach((card, index) => {
        // Kartın açılımdaki konumunu belirle
        let positionTitle = "Genel Enerji";
        if (count === 3) {
            positionTitle = index === 0 ? "Geçmiş" : (index === 1 ? "Şimdi" : "Gelecek");
        } else if (count === 5) {
            const positions = ["Geçmiş", "Şimdi", "Gelecek", "Engel/Zorluk", "Sonuç"];
            positionTitle = positions[index];
        }

        // HTML'e kartı ekle
        cardsArea.innerHTML += `
            <div class="card" style="animation-delay: ${index * 0.2}s">
                <div class="card-position-label" style="color: #F2A900; font-size: 12px; margin-bottom: 5px;">${positionTitle}</div>
                <img src="${card.image}" alt="${card.name}">
                <div class="card-content">
                    <div class="card-title">${card.name}</div>
                </div>
            </div>
        `;

        // Yorum metnini oluştur
        interpretationText += `
            <div style="margin-bottom: 15px;">
                <strong style="color: #F2A900;">${positionTitle} - ${card.name}:</strong> ${card.meaning}
            </div>
        `;
    });

    // Final yorum alanını doldur
    resultDiv.innerHTML = `
        <h2 style="font-family: 'Cinzel', serif; text-align: center; border-bottom: 1px solid #F2A900; padding-bottom: 10px;">🔮 Kozmik Açılım Sonucu</h2>
        <div style="margin-top: 20px;">${interpretationText}</div>
        <div style="margin-top: 20px; padding: 15px; background: rgba(242,169,0,0.1); border-radius: 10px; font-style: italic; text-align: center;">
            "Yıldızlar sadece yolu gösterir, o yolda yürüyen sensin. Bu açılım senin enerjinin bir yansımasıdır."
        </div>
    `;

    // Pürüzsüz kaydırma
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}
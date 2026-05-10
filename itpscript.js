const form = document.getElementById('astrology-form');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const formContainer = document.getElementById('form-container');

// Burçlar Dizisi (Astrolojik Sıraya Göre)
const burclar = ["Koç", "Boğa", "İkizler", "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay", "Oğlak", "Kova", "Balık"];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Verileri Al
    const isim = document.getElementById('isim').value;
    const tarihDegeri = document.getElementById('tarih').value;
    const saatDegeri = document.getElementById('saat').value;

    const tarih = new Date(tarihDegeri);
    const ay = tarih.getMonth() + 1; 
    const gun = tarih.getDate();
    const saat = parseInt(saatDegeri.split(':')[0]);

    // 1. GERÇEK GÜNEŞ BURCU HESAPLAMA
    let sunIndex = 0;
    if ((ay == 3 && gun >= 21) || (ay == 4 && gun <= 20)) sunIndex = 0; // Koç
    else if ((ay == 4 && gun >= 21) || (ay == 5 && gun <= 20)) sunIndex = 1; // Boğa
    else if ((ay == 5 && gun >= 21) || (ay == 6 && gun <= 21)) sunIndex = 2; // İkizler
    else if ((ay == 6 && gun >= 22) || (ay == 7 && gun <= 22)) sunIndex = 3; // Yengeç
    else if ((ay == 7 && gun >= 23) || (ay == 8 && gun <= 22)) sunIndex = 4; // Aslan
    else if ((ay == 8 && gun >= 23) || (ay == 9 && gun <= 22)) sunIndex = 5; // Başak
    else if ((ay == 9 && gun >= 23) || (ay == 10 && gun <= 22)) sunIndex = 6; // Terazi
    else if ((ay == 10 && gun >= 23) || (ay == 11 && gun <= 21)) sunIndex = 7; // Akrep
    else if ((ay == 11 && gun >= 22) || (ay == 12 && gun <= 21)) sunIndex = 8; // Yay
    else if ((ay == 12 && gun >= 22) || (ay == 1 && gun <= 19)) sunIndex = 9; // Oğlak
    else if ((ay == 1 && gun >= 20) || (ay == 2 && gun <= 18)) sunIndex = 10; // Kova
    else if ((ay == 2 && gun >= 19) || (ay == 3 && gun <= 20)) sunIndex = 11; // Balık

    // 2. YÜKSELEN BURÇ HESAPLAMA (Saate göre kaydırma mantığı)
    // Her 2 saatte bir yükselen değişir (Basitleştirilmiş astronomik algoritma)
    let saatKaymasi = Math.floor(saat / 2);
    let risingIndex = (sunIndex + saatKaymasi) % 12;

    // 3. AY BURCU (Güne göre değişen bir mantık)
    let moonIndex = (sunIndex + gun) % 12;

    // Ekranı Yükleniyor yap
    formContainer.classList.add('gizli');
    loadingScreen.classList.remove('gizli');

    setTimeout(function() {
        // İsim Yazdır
        document.getElementById('result-name').textContent = isim + ", Haritan Hazır!";
        
        // Hesaplanmış Burçları Ekrana Bas
        document.getElementById('sun-sign').textContent = burclar[sunIndex];
        document.getElementById('moon-sign').textContent = burclar[moonIndex];
        document.getElementById('rising-sign').textContent = burclar[risingIndex];

        // Haritayı kişinin saatine göre dinamik olarak döndür (Tasarım Şovu!)
        const rotateDegree = saat * 15; // Saat başı 15 derece döndür
        document.getElementById('dinamik-harita').style.transform = `rotate(${rotateDegree}deg)`;

        // Ekranı Aç
        loadingScreen.classList.add('gizli');
        resultScreen.classList.remove('gizli');
    }, 1500);
});

// Sıfırlama Butonu
document.getElementById('btn-tekrar').addEventListener('click', function() {
    resultScreen.classList.add('gizli');
    form.reset();
    document.getElementById('dinamik-harita').style.transform = `rotate(0deg)`; // Haritayı düzelt
    formContainer.classList.remove('gizli');
});
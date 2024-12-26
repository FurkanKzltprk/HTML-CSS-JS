let mesaj =
    `
Migrosa hoşgeldiniz.
Money Kartınız var mı?
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 30
    },

    {
        urunIsmi: "Bebek Bezi",
        fiyat: 170
    },
    {
        urunIsmi: "Kuşbaşı Et",
        fiyat: 340
    }
]
//True veya false verecek buna göre de if'ler ile dallanma yapacam
let sonuc = confirm(mesaj);
let odenecekTutar;
if (sonuc) {
    //Money kartı vardır.
    let isim = prompt("Adınızı giriniz : ");
    let soyisim = prompt("Soyisminizi  giriniz : ");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(
        `Müşteri Bilgileri : ${isim} ${soyisim}
        Ödencek Tutar : ${odenecekTutar}  
        `);


} else {
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar :  ${odenecekTutar}`)



}
//BEnzin istasyonu

/*

1-Dizel  : 24.53
2-Benzin : 22.25
3-LPG    : 11.1

Gelen müşteriden alacağımız bilgiler;
1-Yakıt tipi 
2-Yüklenecek yakıt litresi

  

*/

let dizel = 24.53, benzin = 22.25, lpg = 11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel" + yeniSatir
    + "2-Benzin" + yeniSatir
    + "3-LPG" + yeniSatir
    + "Yakıt türünü seçiniz";

let yakitTipi = prompt(yakitMetni);
let yakitLitresi = Number(prompt("Yakit litresini giriniz : "));
let bakiye = Number(prompt("Bakiyenizi giriniz "));

if (yakitTipi == "1") {
    //Dizel

    let odenecekTutar = dizel * yakitLitresi;
    if (odenecekTutar < bakiye) {
        // bakiyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt alma işlemi başarılı " + yeniSatir
            + "Kalan bakiye : " + bakiye
        );


    } else {
        alert("Bakiyeniz yeterli değildir " + yeniSatir
            + "Ödenecek tutar : " + odenecekTutar + yeniSatir +
            "Bakiye : " + bakiye + yeniSatir
            + "Eksik Tutar : " + (odenecekTutar - bakiye));

    }

} else if (yakitTipi == "2") {
    //Benzin

    let odenecekTutar = benzin * yakitLitresi;
    if (odenecekTutar < bakiye) {
        // bakiyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt alma işlemi başarılı " + yeniSatir
            + "Kalan bakiye : " + bakiye
        );


    } else {
        alert("Bakiyeniz yeterli değildir " + yeniSatir
            + "Ödenecek tutar : " + odenecekTutar + yeniSatir +
            "Bakiye : " + bakiye + yeniSatir
            + "Eksik Tutar : " + (odenecekTutar - bakiye));

    }


} else if (yakitTipi == "3") {
    //LPG
    let odenecekTutar = lpg * yakitLitresi;
    if (odenecekTutar < bakiye) {
        // bakiyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt alma işlemi başarılı " + yeniSatir
            + "Kalan bakiye : " + bakiye
        );


    } else {
        alert("Bakiyeniz yeterli değildir " + yeniSatir
            + "Ödenecek tutar : " + odenecekTutar + yeniSatir +
            "Bakiye : " + bakiye + yeniSatir
            + "Eksik Tutar : " + (odenecekTutar - bakiye));

    }

} else {
    alert("Lütfen geçerli bir yakıt türü seçiniz !")
}

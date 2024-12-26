// oop giriş

class Insan {

    constructor(isim, soyisim, yas, maas) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;

        console.log("Yapıcı metot çalıştı");
    }

    bilgileriGoster() {

        console.log(

            `
             İsim : ${this.isim} 
             Soyisim : ${this.soyisim} 
             Yaş : ${this.yas} 
             Maaş : ${this.maas}
             `

        )
    }

}


const insan1 = new Insan("furkan", "kızıltoprak", 21, 9500);
insan1.bilgileriGoster()
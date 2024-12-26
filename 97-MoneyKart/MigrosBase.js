

class MigrosBase {
    indirimOrani = 20;
    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }
    hesapla() {
        let odenecekTutar = 0;
        if (this.urunleriKontrolEt(this.urunler)) {
            //Sepetimde ürün var if true    
            if (this.kartVarmi) {
                //money kartı var
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100);
                })
            } else {
                //money kartı yok
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                })
            }



        } else { // yoksa if false uyarı veriyorum
            alert("En az bir tane ürün satıl almalısınız.")
        }
        return odenecekTutar;

    }
    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }

    getIsim() {
        return this.isim;
    }
    getSoyisim() {
        return this.soyisim;
    }


}
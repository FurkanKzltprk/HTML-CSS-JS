/*
!! Önemli NOTLAR !!
?not1 : web api tarafında çalışan her şey asenkron çalışır.
? web api mozilla dökümantasyon okuma.

1-) Javascript senkron çalışan bir progrmalama dilidir.
    işlemler sırayla olur yıkarıdan aşağıya doğru compile eder.

   ? console.log("1")
   ? console.log("2")
   ? console.log("3")
   ? 3 kodun çıktısı yukarıdan aşağıya 1 → 2 → 3 şeklinde olur

---------------ASENKRON ÇALIŞMASINA SEBEP OLANLAR----------------
2-) Peki Javascript ne zaman Asenkron çalışır
    1-Timing
    2-Event(olay)
    3-Http isteklerinde


 */

// console.log("Furkan") //! senkron


// setTimeout(() => {
//     console.log("2000 ms Süre doldu ve Çalıştı")   //! Asenkron
// }, 2000);

// setTimeout(() => {
//     console.log("500 ms de bekledi ve çalıştı")   //! Asenkron
// }, 500);

// setTimeout(() => {
//     console.log("1000 ms de bekledi ve çalıştı")   //! Asenkron
// }, 1000);


// console.log("Kızıltoprak")   //! senkron


/* 
        ------- CALLBACK - PROMISE -ASYNC & AWAIT -------------
        -----------> Asenkron yapıları senkrona çevirip yönetiyoruz









*/

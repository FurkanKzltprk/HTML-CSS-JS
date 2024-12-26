/*

---------------- TÜR DÖNÜŞÜMLERİ ----------------
strings, numbers, booleans,undefined, and null.
object, function



*/


// let a = 5;
// let b = "10"; // let b = Number("10");
// let c = Number(b);
// console.log(typeof c);
// console.log(a + c);

//parseInt() string tipinden int tipine çevirebiliriz
// console.log(window);

//! parseInt, parseFloat vb. şekilde de çevirlebilir.

// let a = 8;
// let b = parseInt("12");
// console.log(a + b);

// number tipinden string tipine çevirmek 

// let x = (55).toString;
// console.log(typeof x);
// console.log(x);

// let rakamlar = [1, 2, 3, 4];
// console.log(typeof rakamlar);

//Breakpoint ve Tooltip Nedir ? 

// çarpım tablosu yapımı 

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + "x" + j + "=" + (i * j));
//     }
//     console.log("-----------------------------");
// }
//  !! asal oluğ olmadığını bulan uygulamar.
//  todo merhaba bu yorum satırının rengi turuncudur.
//


// let sayi = Number(prompt("Lütfen bir sayı giriniz : "));
// let sonuc = true;
// for (let i = 2; i <= Math.floor(sayi / 2); i++) {
//     if (sayi % i == 0) {
//         sonuc = false;
//         break; //? matnıklı bir kullanım
//     }

// }15
// if (sonuc) {
//     alert(sayi + " asladır.");

// } else {
//     alert(sayi + " asal değildir !");
// }


/* // ! mükemmelsayi bulma uygulamasi ↓↓↓↓↓
let number = prompt("Bir sayı giriniz :")

isPerfectNumber(number);

function isPerfectNumber(number) {
    let toplam = 0;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            toplam += i;
        }
    }
    toplam += 1 + number;

    if (toplam == number * 2) {
        console.log(number + " Müqqemmel sayıdır ....");
        alert("müqqemmel sayidir");
    } else {
        alert("müqqemmel sayi değildir");
        console.log(number + " Müqqemmel sayı değildir...");
    }
} */



//  ! 10 luk sayıyı 2 liğe çevirme uygulaması .
// let sayi = Number(prompt("Bir sayi giriniz : "));
// convertDecimalToBinary(sayi);

// function convertDecimalToBinary(number) {
//     let binary = "";
//     while (true) {
//         binary += (number % 2).toString();
//         number = Math.floor(number / 2);
//         if (number == 1) {
//             //? sayı 1 olduğu için artık bölmek yok döngüden çıkacağız
//             binary += 1;
//             console.log(typeof binary);
//             break;
//         }

//     }
//     let result = reverse(binary);
//     alert("Sonuç : " + result);
//     console.log("Sonuç : " + result);

// }

// function reverse(binary) {
//     let reverseBinary = "";
//     for (let i = binary.length - 1; i >= 0; i--) {
//         reverseBinary += binary.charAt(i);

//     }
//     return reverseBinary;

// }

// !! 2 'lik sayıdan 10'luğa Çevirme Uygulaması | JS

// let binary = "1001";

// function convertBinaryToDecimal(binary) {
//     let toplam = 0;
//     let ust = 0;

//     for (let i = binary.lenght - 1; i >= 0; i--) {
//         Number(binary.charAt(i)) * Math.pow(2, ust);
//         ust++;

//     }
//     console.log("Sonuç : " + toplam);

// }

// convertBinaryToDecimal(binary);


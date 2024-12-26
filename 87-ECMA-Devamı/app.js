
// ECMA script 6 dan önce böyle yazılıyordu fonksiyonlar
// function yazdir() {
//     console.log("Merhaba");
// }
// yazdir();

// alternatif : arrow function


// const yazdir = () => {
//     console.log("Merhaba 2")
// }
// yazdir()

// const yazdir = (firstName, lastName) => console.log("Merhaba", firstName, lastName)

// ! tek parametre varsa oval parantezleri silebilirsin 
// const yazdir2 = firstName => console.log("Merhaba", firstName)

// yazdir("Furkan", "Kızıltoprak");
// yazdir2("Furkan2")

// todo 1.tarz
// const kupAl = (x) => {
//     return x * x * x
// }
// console.log("Değer", kupAl(3))

// todo 2.tarz
//return ile tek bir parametre alıyorsa oval parantezleri silebiliriz
//süslü parantezler içerisinde tek bir işlem yapılıyorsa onu da kaldırabliriz
// tek bir işlem yaptığı için de returnü kaldırmamı istiyor.


//! bak ne kadar sade oldu
// const kupAl2 = x => x * x * x
// const kareAl = x => x * x
// console.log("Sonuç", kupAl2(3))
// console.log("Sonuç", kareAl(5))

// biz böyle kullanmayacaz artık
// document.addEventListener("click", function () { })



// document.addEventListener("click", () => {
// })



// ? Destructing kullanımı

// let langs = ["C#", "C++", "JavaScript", "Python"]
// let lang1, lang2, lang3, lang4

// lang1 = langs[0]
// lang2 = langs[1]
// lang3 = langs[2]
// lang4 = langs[3]

//alternatif yorulma
// [lang1, lang2, lang3, lang4] = langs

// console.log(lang1, lang2, lang3, lang4)


/* const hesapla = (a, b) => {
    const toplam = a + b
    const cikar = a - b
    const carp = a * b
    const bol = a / b

    const dizi = [toplam, cikar, carp, bol]
    return dizi
}

let [x, y, z, t] = hesapla(10, 2)

console.log(x, y, z, t)*/

// const person = {
//     firstName: "Furkan",
//     lastName: "Kızıltoprak",
//     salary: 120000,
//     age: 23,
// }


// !değişken İsmi↓↓↓  : ile değiştirilebilir
// let { firstName: isim, lastName: soyisim, salary: maas, age: yas } = person

// console.log(isim, soyisim, maas, yas)


//Spread "..." Operatörü kullanımı




// let numbers = [10, 20, 30, 40]

// function add(a, b, c, d) {
//     console.log(a + b + c + d)
// }


// add(...numbers)

// const array1 = ["Enes", "Furkan", "Ahmet", "Merhmet"]
// const array2 = []

// array2[0] = array1[0]
// array2[1] = array1[1]
// array2[2] = array1[2]
// array2[3] = array1[3]
// array2 = [...array1]
// console.log(array2)

// let names = ["furkan", "ahmet", "Ali", "yusuf", "Betül"]
// names.forEach(name => console.log(name))

// for (let name in names) {  // in den aklına gelsin index i veriyor
//     console.log(name, names[name])
// }

// for of dönügüsü ise direkt değerini verir .
// for (let isim of names) {
//     console.log(isim, names.indexOf(isim))
// }


// ! MAP ---> key(anahtar) valeu (değer)


// const map1 = new Map();

//SET 
// map1.set(firstnme , "Furkan")
// map1.set(true,5)


// function write(firstName, lastName) {
// todo biraz yorucu sanki ↓↓↓
//     //! console.log("İsim : " + firstName + " " + " Soyisim : " + lastName)
// alt gr + iki kez noktalı virgül tuşu
//     //!          ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//     console.log(`İsim :  ${firstName} Soyisim : ${lastName}`) // Template literals kullanımı
// }
// write("furkan", "kızıltoprak")



















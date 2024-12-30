//? --------------FETCH API-------------

//callback - promise 
// Ajax 


// function getStudents(url) {
//     fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }
// getStudents("students.json");

// function getData(url) {
//     return fetch(url);
// .then((response) => response.json()) //başında return varmış gibi kabul ediliyor.
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
// }

// getData("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


//! async await olmadan böyle yapılıyor
/*document.querySelector("#button").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((post) => {
            console.log(post)
            burdayız
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                .then((response) => response.json())
                .then((comments) => console.log(comments))
        })
})*/




// !! Async Await ile yapilisi.  
// document.querySelector("#button").addEventListener("click", async () => {
//     const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//     const responseComments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
//     console.log(post, responseComments)
// })



/*

Senkron : Sırayla çalışan işlem parçacıkları.
Asenkron : Eş zamanlı birden fazla iş yapmak için kullanılır.

1. function
2. function
3. function

Javascript SENKRON çalışan bir programlama dilidir ...

I

ASENKRON ÇALIŞMASINA SEBEP OLAN DURUMLAR

1-Timing(Zaman)
2- Event(Olay)
3-HTTP.İSTEKLERİ-
-XmlHttpRequest
-Fetch Api
-Axios

ASENKRONU YÖNETMEK İÇİN;

1-CALLBACK -ES6 öncesi
2-PROMISE   -ES6 2015 then.then
3-ASYNC AWAİT   -thenden sonra async , await gelerek kolaylaştırdı.


*/
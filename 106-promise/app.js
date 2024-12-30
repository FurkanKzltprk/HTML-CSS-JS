// ? --------------PROMISE-------------


// let check = true;

// const promise1 = new Promise((resolve, reject) => {
//     if (check) {
//         resolve("Promise Başarılı");

//     } else {
//         reject("Promise başarısız..");
//     }
// })
// console.log(promise1) 

function readStudents(url) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));

                }
            })

        } catch (error) {
            reject(error);

        }
        xhr.open("GET", url);
        xhr.send();
    })

}

readStudents("student.json")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
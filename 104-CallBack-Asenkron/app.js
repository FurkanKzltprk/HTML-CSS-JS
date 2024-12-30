// CALLBACK NEDİR ?

// timin - event - http istekleri

function getName() {
    setTimeout(() => {
        //servisten isim getirdi.
        console.log("furkan");
    }, 1000);
}

function getsurname() {
    setTimeout(() => {
        console.log("kızıltoprak ")
    }, 500
    );
}

getName();
getsurname();
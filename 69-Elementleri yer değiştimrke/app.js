const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo listesi -Yeni22";

cardBody.replaceChild(newTitle, cardBody.childNodes[1]);



// console.log(cardBody.childNodes[1]);

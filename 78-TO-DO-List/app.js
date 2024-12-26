// Tüm elementleri seçmek
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const clearButton = document.querySelectorAll("#todoClearButton")[1]; // Doğru id

runEvents();

function runEvents() {
    if (form) {
        form.addEventListener("submit", addTodo);
    } else {
        console.error("Form bulunamadı. Lütfen id'yi kontrol edin.");
    }
}

function addTodo(e) {
    // arayüze ekleme
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        alert("Lütfen bir değer giriniz!");
    } else {
        addTodoToUI(inputText);
    }


    console.log("Submit eventi çalıştı");
    e.preventDefault(); // Formun sayfayı yenilemesini engeller
}

function addTodoToUI(newTodo) {

    const li = document.createElementNS("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;
    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";
    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);



    /* <li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li> */

}
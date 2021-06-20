var input_text = document.querySelector(".input_text");
var btn_add = document.querySelector(".btn_add");
var li = document.querySelector("#tasks-list");
console.log(input_text)
console.log(btn_add)
console.log(li)

btn_add.addEventListener("click", function(event) {
    event.preventDefault();
    if (input_text.value.trim() != "") {
        li.innerHTML += `
        <li>
            <div class="li-group d-flex">
                <p>${input_text.value}</p>
                <div class="item">
                    <i class="item-edit fas fa-edit" ></i>
                    <i class="item-remove fas fa-user-times"></i>
                </div>
            </div>
        </li>
    `
        input_text.value = "";

    } else {

    }
})

function deleteItem(element) {
    element.parentNode.parentNode.parentNode.remove();
}

function editItem(element) {
    input_text.value = element.parentNode.previousElementSibling.innerHTML;
    deleteItem(element);
}

function clearName(element) {
    element.previousElementSibling.childNodes.remove();
}
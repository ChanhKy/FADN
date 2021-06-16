$("#add").on("click", function() {
    var name = $(".input-text");
    var nameValue = name.val();
    name.val("");

    // var li = document.createElement("li");
    // innerHTML innerText textConent
    // li.innerHTML = nameValue;

    var ulParent = $("#tasks-list");
    ulParent.html(ulParent.html() + `
        <li>
            <div class="li-group d-flex">
                <p>${nameValue}</p>
                <div class="item">
                    <i class="item-edit fas fa-edit" ></i>
                    <i class="item-remove fas fa-user-times"></i>
                </div>
            </div>
        </li>
    `)
})

//xoa phan tu
$("#tasks-list").on("click", ".item-remove", function() {
    $(this).parent().parent().parent().remove();
})

//sua phan tu
$("#tasks-list").on("click", ".item-edit", function() {
    // $(".input-text").val(this.parentNode.previousElementSibling.innerText);
    $(".input-text").val($(this).parent().prev().html());
    $(this).parent().parent().parent().remove();
})

//empty() xoa all the children 
$(".clear-items").on("click", function() {
    $("#tasks-list").empty();
})


// var ulParent = document.getElementById("tasks-list");
//     var li = element.parentNode.parentNode.parentNode;
//     // ulParent.removeChild(li);
//     li.remove();
// }


// function clearName(element) {
//     // var clear = document.getElementsByClassName("clear-items")[0];
//     var li = element.previousElementSibling;
//     console.log(li);
//     li.innerHTML = "";
// }
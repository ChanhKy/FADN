var regex = /^[A-Za-z ]+$/;


$(".addCauThu").on("click", function() {
    event.preventDefault();
    var status = true

    var fullName = $(".fullName").val();
    if (fullName == "" || (!regex.test(fullName))) {
        $(".error").text("Tên cầu thủ sai định dạng! ");
        $(".error").show();
        $(".error").hide(3000);

        status = false;
    } else {
        $(".error").text("");
    }

    if (status == true) {
        $(".groups").html(
            $(".groups").html() + `
            <div class="item d-flex justify-content-between">
                <span>${fullName}</span>
                <div class="action">
                <button class="edit-item btn  btn-info mt-3 border-0 shadow-none" onclick="editItem(this)"><i class="fas fa-edit"></i></button>
                <button class="delete-item btn  btn-danger mt-3 border-0 shadow-none" onclick="deleteItem(this)"><i class="fas fa-user-times"></i></button>
                    </div>
            </div>
          `
        )
        $(".groups").append($(".item"));
        $(".fullName").val("");
        $(".thongBao").text("");
        $(".error").text("Add cầu thủ thành công! ");
        $(".error").show();
        $(".error").hide(3000);


    }
    // $(".error").animate({
    //     height: 'toggle'
    // }, 3000);


    return status;
})

function deleteItem(element) {
    element.parentNode.parentNode.remove();
    if ($(".item").length == 0) {
        $(".thongBao").text("Đã xóa hết danh sách");
        // $(".thongBao").hide(3000);
    }
}

function editItem(element) {
    element.parentNode.parentNode.remove();
    $(".fullName").val(element.parentNode.previousElementSibling.innerHTML);

}
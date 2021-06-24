const data = [{
        hangSanXuat: "Apple",
        danhMuc: ["Iphone", "Ipad", "Apwatch", "Macbook"]
    },
    {
        hangSanXuat: "Samsung",
        danhMuc: ["Tivi", "Tủ lạnh", "Máy giặt", "Bình lọc nước"]
    }
]

$("#maSP").on("keyup", function() {
    var re = /^[a-zA-Z]{2}\d{4}$/i;
    if (!re.test(($(this).val()))) {
        $(this).next().removeClass("d-none");
    } else {
        $(this).next().addClass("d-none");
    }
})

$("#tenSanPham").on("keyup", function() {
    var re = /^[\w\s]+$/;
    if (re.test(($(this).val())) == false) {
        $(this).next().removeClass("d-none");
    } else {
        $(this).next().addClass("d-none");
    }

})

$("#giaBan").on("keypress", function() {
    var re = /^[0-9][0-9,]*$/;
    if (!re.test(($(this).val()))) {
        $(this).next().removeClass("d-none");
    } else {
        $(this).val(Number($("#giaBan").val().replaceAll(",", "")).toLocaleString());
        $(this).next().addClass("d-none");
    }
})



var html = `<option value="">-- Chọn sản phẩm --</option>`;
data[0].danhMuc.forEach(danhMuc => {
    html += `<option>${danhMuc}</option>`
})
$("#danhMuc").html(html);




$("#hangSanXuat").on("change", function() {
    var html = `<option value="">-- Chọn sản phẩm --</option>`;
    if ($(this).val() == "") {
        data.forEach(item => {
            item.danhMuc.forEach(danhMuc => {
                html += `<option>${danhMuc}</option>`
            })
        })
    } else {
        data.forEach(item => {
            if (item.hangSanXuat == $(this).val()) {
                item.danhMuc.forEach(danhMuc => {
                    html += `<option>${danhMuc}</option>`
                })
            }
        })
    }
    $("#danhMuc").html(html);
})



function tinhThue() {
    var tong = 0;
    if (!$(".tax").first().is(":checked")) {
        $(".tax").first().next().next().removeClass("d-none");
    } else {
        console.log("ok");
        $(".tax:checked").each(function() {
            tong += $(this).val() * $("#giaBan").val().replaceAll(",", "");
        })
        $(".tax").first().next().next().addClass("d-none");
    }
    return Math.round(tong);
}



function tinhThanhTien() {
    return tinhThue() + parseInt($("#giaBan").val().replaceAll(",", ""));
}
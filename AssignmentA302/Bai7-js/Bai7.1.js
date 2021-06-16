// ham sub
$(".btn-sub").on("click", function() {
    // kiem tra xem neu so luong < 1 thi thong bao
    if ($(this).next().val() <= 1) {
        alert("So luong san pham can mua toi thieu la 1.")
    } else {
        //tru so luong di 1
        $(this).next().val($(this).next().val() - 1);

        //
        $(this).parent().parent().next().html(
            "$" + $(this).parent().parent().prev().html().substring(1) * $(this).next().val()
        )
    }
})

$(".btn-plus").on("click", function() {
    //cong so luong len 1 
    $(this).prev().val(parseInt($(this).prev().val()) + 1);

    //tinh tien 
    //goi den phan tu cha -> cha -> phia turoc =>> lay dc gia tien 
    // nhan voi so luong (phan tu lien ke phia truoc this)
    $(this).parent().parent().next().html(
        "$" + $(this).parent().parent().prev().html().substring(1) * $(this).prev().val()
    )
})
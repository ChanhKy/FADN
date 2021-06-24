var data = [{
        tenGiaiDau: "V.League 1",
        cauLacBo: ["Viettel Fc", "Ha Noi Fc", "Hoang Anh gia Lai", "Becamex Binh Duong", "SHD Da Nang", "Song Lam Nghe An"]
    },
    {
        tenGiaiDau: "V.League 2",
        cauLacBo: ["Pho Hien", "Dong Thap", "binh Dinh", "An Giang", "ba Ria Vung Tau"]
    }
]
$(".giaidau").on("change", function() {
    if ($(this).val() == "") {
        var html = `<option value =""> --Chon FC-- </option>`;
        $(".clb").html(html);
    } else {
        data.forEach(item => {
            if (item.tenGiaiDau == $(this).val()) {
                var html = `<option value="">--Chon FC--</option>`;
                item.cauLacBo.forEach(clb => {
                    html += `<option>${clb}</option>`;
                })
                $(".clb").html(html);
            }
        })
    }
})

function checkname(text) {
    var re = /^[a-z]+([ ]?[a-z]+)+$/i;
    return re.test(text) && text.length >= 8 && text.length <= 25;
}

function checkInputValid() {
    var check = true;

    if ($(".giaidau").val() == "") {
        $(".giaidau").next().removeClass("d-none");
        check = false;
    } else {
        $(".giaidau").next().addClass("d-none");
    }

    if ($(".clb").val() == "") {
        $(".clb").next().removeClass("d-none");
        check = false;
    } else {
        $(".clb").next().addClass("d-none");
    }

    if (!checkname($(".tencauthu").val())) {
        $(".tencauthu").next().removeClass("d-none");
        check = false;
    } else {
        $(".tencauthu").next().addClass("d-none");
    }
    return check;

}

$(".btn-add").on("click", function() {
    if (checkInputValid()) {
        $(".alert-success").removeClass("d-none");
        $(".alert-danger").first().addClass("d-none");
        $(".tbody").append(
            `
            <tr>
                <td>${$(".giaidau").val()}</td>
                <td>${$(".clb").val()}</td>
                <td>${$(".tencauthu").val()}</td>
                <td style="width: 15%;">
                    <button class="edit-item btn btn-danger">Edit</button>
                    <button class="del-item btn btn-danger">Del</button>
                </td>
            </tr>
            `
        )
        $("form")[0].reset();
    }
})

$(".tbody").on("click", ".del-item", function() {
    $(this).parent().parent().remove();
    $(".alert-danger").first().removeClass("d-none");
    $(".alert-success").addClass("d-none");
})

$(".tbody").on("click", ".edit-item", function() {
    var item = $(this);
    $(".giaidau > option").each(function() {
        $(".giaidau").val(item.parent().prev().prev().prev().text()).change();

    })
    $(".clb > option").each(function() {
        $(".clb").val(item.parent().prev().prev().text());
    })

    $(".tencauthu").val(item.parent().prev().text());

    item.parent().parent().remove();

})
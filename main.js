function isString(element) {
    var regex = /^[a-z]+$/i;
    if (!regex.test(element.val())) {
        element.next().removeClass("d-none");
    } else {
        element.next().addClass("d-none");
    }
}
console.log("ok");

function isCheckOut() {
    return $(".checkout").is(":checked");
}
$("#firstName").on("keyup", function() {
    isString($(this));
})

$("#lastName").on("keyup", function() {
    isString($(this));
})
$("#address").on("keyup", function() {
    isString($(this));
})
$("#city").on("keyup", function() {
    isString($(this));
})
$("#namecard").on("keyup", function() {
    isString($(this));
})

$("#email").on("keyup", function() {
    var re = /^[a-zA-Z_0-9]+@fsoft.com.vn$/i;
    if (!re.test($("#email").val())) {
        $(this).next().removeClass("d-none");
    } else {
        $(this).next().addClass("d-none");
    }

})

$("#phone").on("keyup", function() {
    var re = /^[0-9]{10}$/;
    if (!re.test($("#phone").val())) {
        $(this).next().removeClass("d-none");
    } else {
        $(this).next().addClass("d-none");
    }
})

$("#inputZip").on("keyup", function() {
    var re = /^[0-9]{5}$/;
    if (!re.test($("#inputZip").val())) {
        $(this).next().removeClass("d-none");
    } else {
        $(this).next().addClass("d-none");
    }
})
$("#numbercard").on("keypress", function() {
    var re = /^[0-9-]{19}$/;
    if (!re.test($("#numbercard").val())) {
        $("#numbercard").next().removeClass("d-none");
    } else {
        $("#numbercard").next().addClass("d-none");
    }

    var valueArr = $(this).val().replaceAll("-", "").split("");
    var length = valueArr.length;
    var count = 0;
    for (let i = 4; i < length && i <= 19; i += 4) {
        valueArr.splice(i + count++, 0, "-");
    }
    $(this).val(valueArr.join(""));
})


$("#month").on("keyup", function() {
    try {
        if (parseInt($(this).val()) >= 1 && parseInt($(this).val()) <= 12) {
            $(this).next().addClass("d-none");
        } else {
            $(this).next().removeClass("d-none");
        }
    } catch (error) {
        $(this).next().addClass("d-none");

    }
})

$("#year").on("keyup", function() {
    try {
        if ((parseInt($(this).val()) > 2000) && ($(this).val().length() == 4)) {
            $(this).next().addClass("d-none");
        } else {
            $(this).next().removeClass("d-none");
        }
    } catch (error) {
        $(this).next().addClass("d-none");

    }
})

$("#cvv").on("keyup", function() {
    var re = /[0-9]{3}$/;
    if (!re.test($(this).val())) {
        $(this).next().removeClass("d-none");
    } else {
        $(this).next().addClass("d-none");
    }
})

$(".checkout").on("click", function() {
    if (!$(".checkout").is(":checked")) {
        $(".checkout").parent().next().removeClass("d-none");
    } else {
        $(".checkout").parent().next().addClass("d-none");
    }
})

$("#inputState").on("change", function() {
    if ($("#inputState").val() == "0") {
        $("#inputState").next().removeClass("d-none");
    } else {
        $("#inputState").next().addClass("d-none");
    }
})


function checkInputIsTmpty() {
    var check = true;
    console.log("1");

    $("input[type=text]").each(function() {
        if ($(this).val() == "") {
            $(this).next().removeClass("d-none");
            check = false;
        }
    })

    if (!$(".checkout").is(":checked")) {
        $(".checkout").parent().next().removeClass("d-none");
        check = false;
    }
    if ($("#email").val() == "") {
        $("#email").next().removeClass("d-none");
        check = false;
    }
    if (!$("#inputState").is(":selected")) {
        $("#inputState").next().removeClass("d-none");
    }

    return check;
}

function checkInputCorrect() {
    var flag = true;

    $("input[type=text]").each(function() {
        if (!$(this).next().hasClass("d-none")) {
            flag = false;
        }

        if ($(".checkout").parent().next().hasClass("d-none")) {
            flag = false;
        }
        if ($("#email").next().hasClass("d-none")) {
            flag = false;
        }

        if (!("#inputState").next().hasClass("d-none")) {
            flag = false;
        }
    })

    return flag;
}

$(".add-btn").on("click", function() {
    event.preventDefault();
    if (checkInputIsTmpty() && checkInputCorrect()) {
        var tr = `
        <tr>
            <td>${$("#firstName").val() +"  " + $("#lastName").val()}</td>
            <td>${$("#eamil").val()}</td>
            <td>${$("#phone").val()}</td>
            <td>${$("#address").val()}</td>
            <td>${$("#city").val() , +" "+ $("#inputState").val(), $("#inputZip").val()}</td>
            <td>${$("#cardname").val()}</td>
            <td>${$("#nuumbercard").val()}</td>
            <td>${$("#month").val() , $("#year").val()}</td>
            <td>${$("#cvv").val()}</td>
            <td>VISA</td>
            <td><a class="delete-item btn btn-danger">X</a></td>
        </tr>
        
        `
    }
})
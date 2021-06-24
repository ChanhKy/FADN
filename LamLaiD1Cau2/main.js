var regexText = /^[\w\s]+$/;
var regexNumber = /((09|03|07|08|05)+([0-9]{8})\b)/g;
var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var regexzip = /^[0-9]{5}$/

$(".btn-add").on("click", function() {
    event.preventDefault();
    var flag = true;

    if (($("#email").val() == "") || (!regexEmail.test($("#email").val()))) {
        $("#email").next().removeClass("d-none");
        flag = false;
        console.log("1");
    } else {
        $("#email").next().addClass("d-none");
    }

    if (($("#password").val() == "") || (!regexText.test($("#password").val()))) {
        $("#password").next().removeClass("d-none");
        flag = false;
    } else {
        $("#password").next().addClass("d-none");
    }

    if (($("#address").val() == "") || (!regexText.test($("#address").val()))) {
        $("#address").next().removeClass("d-none");
        flag = false;
    } else {
        $("#address").next().addClass("d-none");
    }
    if (($("#phone").val() == "") || (!regexNumber.test($("#phone").val()))) {
        $("#phone").next().removeClass("d-none");
        flag = false;
    } else {
        $("#phone").next().addClass("d-none");
    }
    if ($("#city").val() == "" || (!regexText.test($("#city")))) {
        $("#city").next().removeClass("d-none");
        flag = false;
    } else {
        $("#city").next().addClass("d-none");
    }
    if (($("#zip").val() == "") || (!regexzip.test($("zip").val()))) {
        $("#zip").next().removeClass("d-none");
        flag = false;
    } else {
        $("#zip").next().addClass("d-none");
    }

    if (!$("#check").is(":checked")) {
        $("#check").parent().next().removeClass("d-none");
        flag = false;
    }

    return flag;
})

$("#check").on("click", function() {
    if ($("#check").is(":checked")) {
        $("#check").parent().next().addClass("d-none");

    } else {
        $("#check").parent().next().removeClass("d-none");

    }
})
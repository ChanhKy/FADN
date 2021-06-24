var regexText = /^[A-Za-z ]+$/;
var regexNumber = /^[-+]?[0-9]+\.?[0-9]*$/;
var regexDay = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;



$(".kiemtra").on("click", function() {
    event.preventDefault();

    var flag = true;

    var fullName = $(".fullName").val();
    var gender = $("input[name=gioitinh]:checked").val();
    var dob = $(".dob").val();
    var height = $(".height").val();
    var weight = $(".weight").val();

    if (fullName == "" || !regexText.test(fullName)) {
        console.log("ok");
        $("#fullName_error").text("Ho va ten nhap sai dinh dang");
        flag = false;
    } else {
        $("#fullName_error").text("");
    }
    if ($("input[name=gioitinh]:checked").length == 0) {
        $("#gender_error").text("Vui long chon 1 gioi tinh");
        flag = false;
    } else {
        $("#gender_error").text("");
    }
    if ((dob == "") || (!regexDay.test(dob))) {
        $("#dob_error").text("Ngay nhap vao sai dinh dang");
        flag = false;
    } else {
        $("#dob_error").text("");
    }
    if ((height == "") || (!regexNumber.test(height))) {
        $("#height_error").text("Chieu cao nhap vao sai");
        flag = false;
    } else {
        $("#height_error").text("");
    }
    if ((weight == "") || (!regexNumber.test(weight))) {
        $("#weight_error").text("Can nang nhap vao sai");
        flag = false;
    } else {
        $("#weight_error").text("");
    }
    if (flag == true) {
        // tinh tuoi
        var age = new Date().getFullYear() - new Date(dob).getFullYear();

        //tinh chi so BMI
        var bmi = weight / (height * height);
        var suckhoe = "";
        if (age > 20) {
            if (bmi < 18.5) {
                suckhoe = "Gầy";
            } else
            if (age >= 18.5 && bmi <= 22.9) {
                suckhoe = "Bình thường";
            } else
            if (age == 23) {
                suckhoe = "Thừa cân";
            } else
            if (age > 23 && bmi <= 24.9) {
                suckhoe = "Tiền béo phì";
            } else
            if (age >= 25 && bmi <= 29.9) {
                suckhoe = "Béo phì Độ I";
            } else
            if (age >= 30) {
                suckhoe = "Béo phì Độ II";
            }
        }

        //hien thi ra bang
        $(".tbody").html(
            $(".tbody").html() +
            `
                <tr>
                    <td>${fullName}</td>
                    <td>${gender}</td>
                    <td>${dob}</td>
                    <td>${age}</td>
                    <td>${suckhoe}</td>
                </tr>
            `
        )

    }

    return flag;
})
// Regex1
function isCreditcard(str) {
    var regex = /^[0-9]{16}$/;
    return regex.test(str);
}
console.log("Credit card: ");
console.log(isCreditcard("1234567891234567"));
console.log(isCreditcard("12345678912345"));

//Regex2
function isNumber(str) {
    var regex = /^\d+$/;
    return regex.test(str);
}
console.log(isNumber("123456"));
console.log(isNumber("asdsad4453"));

//Regex3
function isEmail(str) {
    var regex = /^[\w._-]{6,}@[\w]+(\.[a-zA-Z]{2,6})+$/;
    return regex.test(str);
}
console.log(isEmail("nguyenchanhky@gmail.com"));
console.log(isEmail("gsaghdjgah432432@dasdas"));

//Regex4
function isURL(str) {
    var regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    return regex.test(str);
}
console.log(isURL("http://www.w3schools.com/"));
console.log(isURL("https://www.w3schools.com/qwerty/"));
console.log(isURL("www.w3schools.com"));

//Regex5
function isText(str) {
    var regex = /^[0-9a-zA-Z]+$/;
    return regex.test(str);
}

console.log(isText("asdf123"));
console.log(isText("123/*-"));
console.log(isText("qwerty!@#$"));
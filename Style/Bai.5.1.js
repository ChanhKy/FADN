var arr = [1, 25, 46, 22, 12, 9, 51, 31];

function soChan(arr) {
    var arrChan = [];
    var count = 0;
    for (const i of arr) {
        if (i % 2 == 0) {
            count += i;
            // console.log(i);
            arrChan.push(i);
        }
    }
    // console.log("tong cac so chan la: " + count);
    return arrChan;
}
//////////////////////////
function soLe(arr) {
    var arrLe = [];
    var count = 0;
    for (const i of arr) {
        if (i % 2 == 0) continue
        count += i;
        // console.log(i);
        arrLe.push(i);

    }
    // console.log("tong cac so le la: " + count);
    return arrLe;
}
///////////////////////////
function showArr(arr) {
    var count = 0;
    for (let x of arr) {
        count += x;
        console.log(x);
    }
    console.log("Tong cac phan tu la : " + count);
}

///////////////////////////
var number1 = parseInt(prompt("Nhap vao so thu nhat: "));
var number2 = parseInt(prompt("Nhap vao so thu 2: "));

function chuaMang(arr) {
    for (const i of arr) {
        if (i >= number1 && i <= number2) {
            console.log(i);
        }

    }
}

function selectionSort(arr) {
    let currentIndex;
    for (let i = 0; i < arr.length; i++) {
        currentIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentIndex] > arr[j]) {
                currentIndex = j;
            }
        }
        if (i !== currentIndex) {
            let temp = arr[i];
            arr[i] = arr[currentIndex];
            arr[currentIndex] = temp;
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[i];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}
////////////////////////////
showArr(soChan(arr));
console.log("=================");
showArr(soLe(arr));
console.log("=================");
console.log("cac gia tri nam trong khoang " + number1 + " - " + number2);
chuaMang(arr);
console.log("sap xep");
// arr.sort((a, b) => a - b);
// console.log(arr);
console.log(selectionSort(arr));
console.log(insertionSort(arr));
console.log(insertionSort(soChan(arr)));
console.log(selectionSort(soLe(arr)));
// Question No 1 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Qu1 = function () {
    // var name: any | null = prompt("Enter Your Name", "Saqib Ali");
    var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    console.log("Len", arr);
    var myContainer = document.getElementById('Question1Ans');
    myContainer.innerHTML += "Read Number :" + arr + " <br>Print Array List: " + arr + " <br>";
};
// Question No 2 
var Qu2 = function () {
    // var name: any | null = prompt("Enter Your Name", "Saqib Ali");
    var arr = [10, 20, 30, 40, 50, -60, -70, -80, -90, 1 - 100];
    console.log("Len", arr);
    var neg = arr.filter(function (a) {
        return a < 0;
    });
    var myContainer = document.getElementById('Question2Ans');
    myContainer.innerHTML += "Array No List :" + arr + " <br> All Negative No: " + neg + " <br>";
};
// Question No 3 
var Qu3 = function () {
    // var name: any | null = prompt("Enter Your Name", "Saqib Ali");
    var arr = [10, 20, 30, 40, 50, -60, -70, -80, -90, 1 - 100];
    console.log("Len", arr);
    var sum = arr.reduce((function (a, b) { return b > 0 ? b + a : a; }), 0);
    var myContainer = document.getElementById('Question3Ans');
    myContainer.innerHTML += "Array No List :" + arr + " <br> All Sum: " + sum + " <br>";
};
// Question No 4 
var Qu4 = function () {
    var arr = [10, 20, 30, 40, 50, -60, -70, -80, -90, -100];
    console.log("Len", arr);
    var max = arr.reduce(function (a, b) {
        return a > b ? a : b;
    });
    var min = arr.reduce(function (a, b) {
        return a < b ? a : b;
    });
    var myContainer = document.getElementById('Question4Ans');
    myContainer.innerHTML += "Array No List :" + arr + " <br> Maximum No: " + max + " <br> Minimum No." + min + "<br>";
};
// Question No 5 
var Qu5 = function () {
    var arr = [5, 10, 20, 30, 40, 50, 60, -60, -70, -80, -90, -100];
    console.log("Len", arr);
    var max = arr.sort(function (a, b) {
        return b - a;
    })[1];
    var myContainer = document.getElementById('Question5Ans');
    myContainer.innerHTML += "Array No List :" + arr + " <br>  Second Largest No: " + max + "<br>";
};
// Question No 6 
var Qu6 = function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    console.log("Len", arr);
    var even = arr.filter(function (a) {
        if (a % 2 == 0) {
            return a;
        }
    });
    var odd = arr.map(function (b) {
        if (b % 2 == 1) {
            return b;
        }
    });
    var myContainer = document.getElementById('Question6Ans');
    myContainer.innerHTML += "Array No List :" + arr + " <br>  Even No: " + even + "<br> Odd No. " + odd;
};
// Question No 7 
var Qu7 = function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, -8, -9, -10, -11, -12];
    console.log("Len", arr);
    var neg = arr.filter(function (a) {
        return a < 0;
    });
    var Lengthneg = neg.length;
    var myContainer = document.getElementById('Question7Ans');
    myContainer.innerHTML += "Array No List :" + arr + " <br> All Negative No: " + neg + " <br> Total Length : " + Lengthneg;
};
// Question No 8 
var Qu8 = function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, -8, -9, -10];
    var arr1 = [11, 12, 13, 14, 15];
    var copy = arr.push.apply(arr, arr1);
    var myContainer = document.getElementById('Question8Ans');
    myContainer.innerHTML += "Array No List 1 :" + arr + " <br>Array No List 2 :" + arr1 + " <br> Copy Array2 in Array 1  : " + copy;
};
// Question No 9 
var Qu8 = function () {
    var arr = [1, 2, 3, 4, 5];
    var arr1 = [1, 2, 3, 4, 5];
    var arr2 = [6, 7, 8, 9, 10];
    arr1.push.apply(arr1, arr2);
    var myContainer = document.getElementById('Question8Ans');
    myContainer.innerHTML += "Array No List One : " + arr +
        " <br>Array No List Two : " + arr2 +
        " <br> Copy Array Two in Array One  : " + arr1 + "<br>";
};
// Question No 9 
var Qu9 = function () {
    var arr = [1, 2, 3, 4, 5];
    var arr1 = [1, 2, 3, 4, 5];
    var arr2 = [6, 7, 8, 9, 10];
    arr1.push.apply(arr1, arr2);
    var myContainer = document.getElementById('Question9Ans');
    myContainer.innerHTML += "Array No List One : " + arr +
        " <br>Array No List Two : " + arr2 +
        " <br> Insert an Element of Array  : " + arr1 + "<br>";
};
// Question No 10
var Qu10 = function () {
    var arr = [1, 2, 3, 4, 5];
    var arr1 = [1, 2, 3, 4, 5];
    var removed = arr1.splice(2, 2);
    var myContainer = document.getElementById('Question10Ans');
    myContainer.innerHTML += "Array No List : " + arr + "<br> Array Remove in  list  : " + arr1 +
        " <br> Removed No List arr1.splice(2,2) : " + removed +
        " <br> ";
};
// Question No 11
var Qu11 = function () {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
    var aCount = new Map(__spreadArray([], new Set(arr), true).map(function (x) { return [x, arr.filter(function (y) { return y === x; }).length]; }));
    console.log(aCount);
    var myContainer = document.getElementById('Question11Ans');
    myContainer.innerHTML += "Array No List : " + arr + "<br> Array Remove in  list  : " + aCount +
        " <br> Removed No List arr1.splice(2,2) : " + aCount +
        " <br> ";
};
// Question No 12
var Qu12 = function () {
    var a = ["1", "1", "2", "3", "3", "1"];
    var unique = a.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
    console.log(unique);
    var myContainer = document.getElementById('Question12Ans');
    myContainer.innerHTML += "Array No List : " + a + "<br> Count Frequency : " + unique +
        " <br> ";
};

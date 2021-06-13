// Dùng cho việc debug
console.log('Hello world');

// alert('Hello');

/**
 * Biến và kiểu dữ liệu
 * - Kiểu nguyên thủy (primitive type): string, boolean, undefined, null, bigint, symbol
 * - null là kiểu object => bug
 * - Còn lại đều là object (kiểu đối tượng)
 * - Phép gán (=)
 * - Dynamic type
 * - Không đặt tên biến trùng với các keywords của JS: if, else, function, var, ....
 * - Hằng số (constant):
 *      + Lưu trữ những giá trị không bao giờ thay đổi
 *      + Không thể gán lại giá trị mới được
 *      + Khai báo hằng số nên viết IN_HOA
 */

//gán giá trị cho fullName => nó sẽ được gọi theo biến
var fullName = 'Doan Thi Ngoc Lan';
console.log(typeof fullName);

var age = 18;
console.log(age);

age = '18';
console.log(typeof age);

var isStudent = true;
console.log(typeof isStudent);

var height; //undefined
console.log(height);

var weight = null; //object => bug
console.log(typeof weight);


/**
 * Hằng số
 */
const PI = 3.14;

/**
 * Câu lệnh điều kiện:
 * - if
 * - if else
 * - else if
 * - switch case
 * 
 * Phép so sánh: 
 * - ==; => chỉ so sánh giá trị
 * - ===; => so sánh cả giá trị và kiểu dữ liệu
 * - >, <, >=, <=, !=, !==
 */

// Phép so sánh
console.log(3 == '3'); //true
console.log(3 === '3'); //false

console.log(3 != 3); //false
console.log(3 !== '3'); //true

//if
var isGirl = true;
if (isGirl) {
    //alert('ALo');
}

//if else
var isAdult = true;

if (isAdult) {
    console.log('You can access this page!');
} else {
    console.log('FBI wanning!!!');
}

//else if

//switch case
var number = 1;
switch (number) {
    case 1:
        console.log('Một');
        break;
    case 2:
        console.log('Hai');
        break;
    case 4:
        console.log('Bốn');
        break;
    default:
        console.log('không xác định!');
        break;
}

//Biểu thức điều kiện (LOGICAL OPERATOR)
var A = true;
var B = false;

console.log(A && B); //false => Chỉ cần 1 trong A, B sai thì cả phép tính sai
console.log(A || B); //true
console.log(!(!A || B)); //true

/**
 * Hàm (function)
 * - 3 loại: declaration func, expression func, arrow func (es6)
 * - Hàm không tham số, 
 * - Hàm có tham số,
 * - Hàm vừa có tham số vừa có giá trị trả về
 */

//Hàm không tham số, không có giá trị trả về
function sayHello() {
    console.log('hello there!');
}
//Hàm có tham số, không có giá trị trả về
function sayHelloToSomeone(name) {
    console.log(name);
    console.log('Hello ' + name);
}
//Hàm vừa có tham số vừa có giá trị trả về
function calculateGPA(score1, score2, score3) {
    var gpa = (score1 + score2 + score3) / 3;
    
    return gpa;
}

sayHello();
sayHelloToSomeone('Lan');
var _gpa = calculateGPA(7, 8, 9);
console.log(_gpa);
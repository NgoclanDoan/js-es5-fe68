/**
 * Array (mảng)
 */

//Khởi tạo mảng
//C1: hay dùng cách này
var listSinhVien = ['Lan', 'Quyen'];
console.log(listSinhVien);
// console.log(typeof listSinhVien); => object
//C2
var listNhanVien = new Array('Lan', 'Quyen');

//Truy xuất phần tử trong mảng
console.log(listSinhVien[0]);

//Cập nhật giá trị
listSinhVien[0] = 'Dong';
console.log(listSinhVien[0]);

//Thêm phần tử vào mảng
listNhanVien.push('Dong'); //thêm một phần tử vào cuối mảng
listNhanVien.unshift('Nam'); // Thêm vào đầu mảng một phần tử
console.log(listNhanVien);

//Xóa phần tử khỏi mảng
listNhanVien.pop(); // xóa một phần tử cuối mảng
listNhanVien.shift(); //xóa một phần tử đầu mảng
console.log(listNhanVien);

//lấy độ dài của mảng
console.log(listNhanVien.length);

//Duyệt mảng (sử dụng vòng lặp for)
// debugger;
for (var i = 0; i < listNhanVien.length; i++) {
    console.log(listNhanVien[i]);
}

/**
 * DOM:
 * - DOM thông qua ID
 * - DOM thông qua TAGNAME
 * - DOM thông qua CLASS
 */
// DOM thông qua id
var tabHelloDom = document.getElementById('helloDOM');
console.log(tabHelloDom);
tabHelloDom.innerHTML = 'Helloaa'; //Thay dổi nội dung của element
tabHelloDom.style.backgroundColor = 'red'; //Thay đổi style của element

//DOM thông qua tagname
var tagHeading = document.getElementsByTagName('h2');
console.log(tagHeading);

//Xử lý sự kiện click
//C1
var handleClickChaoTheGioi = function () {
    alert('Chào thế giời');
};
//C2
document.getElementById('btnChaoTheGioi').onclick = function () {
    // alert('Chào thế giời');
};
//C3: callback function: 1 func là tham số của func khác
document.getElementById('btnChaoTheGioi').addEventListener('click',function () {  
alert('Chào thế giời');
});
// var cbFn = function () {
//     alert('Chào thế giời');
// };
// document.getElementById('btnChaoTheGioi').addEventListener('click', cbFn);
document
    .getElementById('btnBatDen')
    .addEventListener('click', function () {
        document.getElementById('btnChaoTheGioi').src
    });
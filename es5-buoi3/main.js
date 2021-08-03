/**
 * Object (kiểu đối tượng)
 */
var person = {
    // key:value
    // Đối tượng có 2 thành phần là thuộc tính (properties) và phương thức (ko must có cả hai)
    //Thuộc tính của đối tượng person
    name: 'Lan',
    age: 18,
    class: 'FE68',

    // Phương thức của đối tượng person
    greeting: function () {
        console.log('Hello!');
    }
};

//Truy xuất thuộc tính, phương thức của đối tượng
//C1
console.log(person.name);
console.log(person.class);
console.log(person.greeting());

//C2
var _age = 'age';
console.log(person['age']);
console.log(person[_age]);

//Thay dổi giá trị thuộc tính 
person.name = 'Quyen';
person['name'] = 'haha';
console.log(person);

//Thêm thuộc tính mới vào object
person.height = 170;
console.log(person);

//Xóa thuộc tính trong object
delete person.age;
console.log(person);

var employee = {
    //Thuộc tính
    id: '1234',
    fullName:'Doan thi ngoc lan',
    email: 'example@gmail.com',

    //Phương thức
    tinhLuong: function(){},
    tinhTongSoGioLam: function(){},

    //Phương thức
    tinhTongNgayNghi(){
        console.log('shorthand method');
    }
}
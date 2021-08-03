// lớp đối tượng: contructor function
function SinhVien(
    _maSV,
    _tenSV,
    _email,
    _matKhau,
    _ngaySinh,
    _khoaHoc,
    _diemToan,
    _diemLy,
    _diemHoa
) {
    // Thuộc tính
    this.maSV = _maSV;
    this.tenSV = _tenSV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaySinh = _ngaySinh;
    this.khoaHoc = _khoaHoc;
    this.diemToan = _diemToan;
    this.diemLy = _diemLy;
    this.diemHoa = _diemHoa;

    //Phương thức
    this.tinhDTB = function () {
        return (
            (parseFloat(this.diemToan) +
                parseFloat(this.diemLy) +
                parseFloat(this.diemHoa)) /
            3
        );
    };
}
//Khởi tạo 1 đối tượng sinh viên từ lớp đối tượng SinhVien
var sv1 = new SinhVien(
    'SV1',
    'Lan',
    'ex@gmail',
    '12345',
    '06/06',
    'FE68',
    4,
    5,
    6
);
console.log(sv1);

/**
 * Cách thức hoạt động của toán tử new
 * 4 bước:
 * - b1: Tạo ra một object rỗng (empty object => {})
 * - b2: Gọi function SinhVien và gán object rỗng được tạo ở b1 vào biến this (this = {})
 * - b3: trỏ object rỗng (b1) đến object object prototype trong contruction func (SinhVien)
 * - b4: Tiến hành return về obj rỗng được tạo ra từ b1
 */

/**
 * 'this' keyword / variable: chỉ tồn tại ở trong function, giá trị của biến this chính là object mà function đó thuộc về, giá trị của 'this' không cố định và được xác định tại thời điểm mà func đó được thực thi
 * - Regular function: this = global object (window)
 * - 'new; operator (contructor func): this = empty object được tạo ra từ contructor func
 * - Func là method của object: this = object chứa method đó
 * - Event handler: this = element xảy ra event 
 */
// var _sinhVien = function (ma, ten, lop) {
//     var emptyObject = {};
//     var _this = emptyObject;
//     _this.ma = ma;
//     _this.ten = ten;
//     _this.lop = lop;
//     console.log(emptyObject);
//     return emptyObject;
// };
// var sv2 = _sinhVien(15, 'lan', 45);
// console.log(sv2);

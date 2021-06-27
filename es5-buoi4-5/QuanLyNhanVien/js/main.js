/**
 * Khởi tạo danh sách Nhân viên từ đối tượng DanhSachNhanVien
 */
var dsnv = new DanhSachNhanVien();
console.log(dsnv);
var getEle = function (id) {
    return document.getElementById(id);
};
var validator = new Validator();
var renderDSNV = function (dsnv) {
    var content = '';
    dsnv.forEach(function (nv, index) {
        /**
         * ``: string template
         */
        content += `
        <tr>
            <td>${nv.maNV}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngaySinh}</td>
            <td>${nv.chucVu}</td>
            <td>
            <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${nv.maNV}')">Xem</button>
            <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maNV}')">Xóa</button>
            </td>
        </tr>
        `;
    });
    getEle('tableDanhSach').innerHTML = content;
};
function xoaNhanVien(maNV) {
    dsnv.xoaNhanVien(maNV);
    renderDSNV(dsnv.arr);
    setLocalStorage();
}
function suaNhanVien(maNV) {
    getEle('btnThemNV').style.display = 'none';
    getEle('btnCapNhat').style.display = 'block';

    getEle('msnv').disabled = 'true';
    // getEle('msnv').setAttribute('disabled', true);

    var nhanVien = dsnv.layThongTinNhanVien(maNV);

    /**
     * Đổ data nhanVien lên modal
     */
    getEle('msnv').value = nhanVien.maNV;
    getEle('name').value = nhanVien.tenNV;
    getEle('email').value = nhanVien.email;
    getEle('password').value = nhanVien.matKhau;
    getEle('datepicker').value = nhanVien.ngaySinh;
    getEle('chucvu').value = nhanVien.chucVu;
}
var validateInput = function (maNV, hoTen, email, matKhau) {
    /**
     * Kiểm tra dữ liệu
     */
    var isValid = true;
    isValid &=
        validator.kiemTraRong(
            maNV,
            'tbMaNV',
            'Mã nhân viên không được để trống'
        ) &&
        validator.kiemTraDoDaiKyTu(
            maNV,
            'tbMaNV',
            'Vui lòng nhập từ 4 - 10 ký tự!',
            4,
            10
        );
    isValid &=
        validator.kiemTraRong(hoTen, 'tbTen', 'Họ tên không được để trống') &&
        validator.kiemTraChuoi(hoTen, 'tbTen', 'Họ và tên không hợp lệ');

    isValid &=
        validator.kiemTraRong(email, 'tbEmail', 'Email không được để trống') &&
        validator.kiemTraEmail(email, 'tbEmail', 'Email không đúng định dạng');

    isValid &=
        validator.kiemTraRong(
            matKhau,
            'tbMatKhau',
            'Mật khẩu không được để trống'
        ) &&
        validator.kiemTraDoDaiKyTu(
            maNV,
            'tbMaNV',
            'Vui lòng nhập từ 6 - 8 ký tự!',
            6,
            8
        );
    isValid &= validator.kiemTraChucVu(
        'chucvu',
        'tbChucVu',
        'Bạn chưa chọn chức vụ'
    );
    if (!isValid) return;
};
/**
 * Cập nhật nhân viên
 */
getEle('btnCapNhat').addEventListener('click', function () {
    /**
     * Lấy thông tin mới từ ô input
     */
    var maNV = getEle('msnv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngaySinh = getEle('datepicker').value;
    var chucVu = getEle('chucvu').value;
    if (!validateInput(maNV, hoTen, email, matKhau)) return;
    var nhanVien = new NhanVien(maNV, hoTen, email, matKhau, ngaySinh, chucVu);
    dsnv.capNhatNhanVien(nhanVien);
    getEle('btnDong').click();
    renderDSNV(dsnv.arr);
    setLocalStorage();
});
getEle('searchName').addEventListener('keyup', function () {
    var keyword = getEle('searchName').value;
    var mangTimKiem = dsnv.timKiemNhanVien(keyword);
    renderDSNV(mangTimKiem);
});
//Lấy data từ local storage
getLocalStorage();

getEle('btnThem').addEventListener('click', function () {
    getEle('btnCapNhat').style.display = 'none';
    getEle('btnThemNV').style.display = 'block';
});

getEle('btnThemNV').addEventListener('click', function () {
    var maNV = getEle('msnv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngaySinh = getEle('datepicker').value;
    var chucVu = getEle('chucvu').value;

    /**
     * Khởi tạo đối tượng nhanVien từ lớp đối tượng nhanVien
     */
    var nhanVien = new NhanVien(maNV, hoTen, email, ngaySinh, chucVu);
    /**
     * Kiểm tra giá trị người dùng nhập vào
     */
    if (!validateInput(maNV, hoTen, email, matKhau)) return;
    /**
     * Thêm đối tượng nhanVien vào mảng
     */
    dsnv.themNhanVien(nhanVien);
    console.log(dsnv.arr);
    renderDSNV(dsnv.arr);
    /**
     * Đóng model
     */
    getEle('btnDong').click(); //tự động click nút đóng

    /**
     * Lưu data xuống local storage
     */
    setLocalStorage();
});

function getLocalStorage() {
    /**
     * Lấy data từ local storage
     */
    if (localStorage.getItem('DSNV')) {
        dsnv.arr = JSON.parse(localStorage.getItem('DSNV'));
        renderDSNV(dsnv.arr);
    }
}
function setLocalStorage() {
    /**
     * Lưu data xuống local storage => chuyển thành định dạng JSON
     */
    localStorage.setItem('DSNV', JSON.stringify(dsnv.arr));
}

// var maSV = document.querySelector('#txtMaSV');=> trả về element đầu tiên tìm thấy
// console.log(maSV);=> trả về một danh sách element

// var queryAll = document.querySelectorAll('input');
// console.log(queryAll);

var danhSachSinhVien = [];
var getEle = function (id) {
    return document.getElementById(id);
};
var renderDSSV = function () {
    // Cách cũ sử dụng để duyệt sinh viên
    for (var i = 0; i < danhSachSinhVien.length; i++) {
        // Tạo dòng
        var tagTr = document.createElement('tr'); //<tr></tr>

        //Tạo cột
        var tagTdMaSV = document.createElement('td'); //<td></td>
        var tagTdTenSV = document.createElement('td'); //<td></td>
        var tagTdEmail = document.createElement('td'); //<td></td>
        var tagTdNgaySinh = document.createElement('td'); //<td></td>
        var tagTdKhoaHoc = document.createElement('td'); //<td></td>
        var tagTdDiemTB = document.createElement('td'); //<td></td>

        //Gán nội dung cho cột
        var sv = danhSachSinhVien[i];
        tagTdMaSV.innerHTML = sv.maSV;
        tagTdTenSV.innerHTML = sv.tenSV;
        tagTdEmail.innerHTML = sv.email;
        tagTdNgaySinh.innerHTML = sv.ngaySinh;
        tagTdKhoaHoc.innerHTML = sv.khoaHoc;
        tagTdDiemTB.innerHTML = sv.tinhDTB();

        //Gán lần lượt các cột vào dòng
        tagTr.appendChild(tagTdMaSV);
        tagTr.appendChild(tagTdTenSV);
        tagTr.appendChild(tagTdEmail);
        tagTr.appendChild(tagTdNgaySinh);
        tagTr.appendChild(tagTdKhoaHoc);
        tagTr.appendChild(tagTdDiemTB);

        //Gán dòng vào tbody
        getEle('tbodySinhVien').appendChild(tagTr);
    }
};
var themSinhVien = function () {
    /**
     * Lấy thông tin từ người dùng nhập
     */
    var maSV = getEle('txtMaSV').value;
    var tenSV = getEle('txtTenSV').value;
    var email = getEle('txtEmail').value;
    var matKhau = getEle('txtPass').value;
    var ngaySinh = getEle('txtNgaySinh').value;
    var khoaHoc = getEle('khSV').value;
    var diemToan = getEle('txtDiemToan').value;
    var diemLy = getEle('txtDiemToan').value;
    var diemHoa = getEle('txtDiemHoa').value;
    /**
     * Khởi tạo đối tượng sinhVien
     */
    var sinhVien = new SinhVien(
        maSV,
        tenSV,
        email,
        matKhau,
        ngaySinh,
        khoaHoc,
        diemToan,
        diemLy,
        diemHoa
    );
    danhSachSinhVien.push(sinhVien);
    // console.log(danhSachSinhVien);
    renderDSSV();
};

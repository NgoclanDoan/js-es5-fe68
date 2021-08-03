var tinhDTB = function (dToan, dVan) {
    return (parseFloat(dToan) + dVan) / 2;
};

var xepLoai = function (dtb) {
    var loai = '';
    if (dtb >= 8 && dtb <= 10) {
        loai = 'Gioi';
    } else if (dtb >= 6.5 && dtb < 8) {
        loai = 'Khá';
    } else if (dtb >= 5 && dtb < 6.5) {
        loai = 'Trung Bình';
    } else {
        loai = 'Yếu';
    }
    return loai;
};
var getEle = function (id) {
    return document.getElementById(id);
};
// var hienThiThongTin = function () {
//     /**
//      * Lấy thông tin từ người dùng nhập
//      */
//     var maSV = document.getElementById('txtMaSV').value;
//     var tenSV = document.getElementById('txtTenSV').value;
//     var loaiSV = document.getElementById('loaiSV').value;
//     var dToan = document.getElementById('txtDiemToan').value;
//     var dVan = document.getElementById('txtDiemVan').value;
//
//     /**
//      *
//      */
//     var dtb = tinhDTB(dToan, dVan);
//     var loai = xepLoai(dtb);
//     document.getElementById('spanTenSV').innerHTML = tenSV;
//     document.getElementById('spanMaSV').innerHTML = maSV;
//     document.getElementById('spanLoaiSV').innerHTML = loaiSV;
//     document.getElementById('spanDTB').innerHTML = dtb;
//     document.getElementById('spanXepLoai').innerHTML = loai;
// };
var hienThiThongTin = function () {
    /**
     * Lấy thông tin từ người dùng nhập
     */
    var maSV = getEle('txtMaSV').value;
    var tenSV = getEle('txtTenSV').value;
    var loaiSV = getEle('loaiSV').value;
    var dToan = getEle('txtDiemToan').value;
    var dVan = getEle('txtDiemVan').value;

    /**
     *
     */
    var dtb = tinhDTB(dToan, dVan);
    var loai = xepLoai(dtb);
    getEle('spanTenSV').innerHTML = tenSV;
    getEle('spanMaSV').innerHTML = maSV;
    getEle('spanLoaiSV').innerHTML = loaiSV;
    getEle('spanDTB').innerHTML = dtb;
    getEle('spanXepLoai').innerHTML = loai;
};

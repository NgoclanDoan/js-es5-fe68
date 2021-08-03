var getEle = function (id) {
    return document.getElementById(id);
};
var hienThiThongTin = function () {
    /**
     * Lấy thông tin từ người dùng nhập
     */
    var _maSV = getEle('txtMaSV').value;
    var _tenSV = getEle('txtTenSV').value;
    var _loaiSV = getEle('loaiSV').value;
    var _dToan = getEle('txtDiemToan').value;
    var _dVan = getEle('txtDiemVan').value;

    /**
     * Khởi tạo đối tượng sinh viên
     */
    var sinhVien = {
        //Thuộc tính
        maSV: _maSV,
        tenSV: _tenSV,
        loaiSV: _loaiSV,
        dToan: _dToan,
        dVan: _dVan,

        //Phương thức
        tinhDTB() {
            //this = sinhVien
            console.log(this);
            return (Number(this.dToan) + Number(this.dVan)) / 2;
        },
        xepLoai(dtb) {
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
        },
    };

    /**
     *
     */
    var dtb = sinhVien.tinhDTB();
    var loai = sinhVien.xepLoai(dtb);
    getEle('spanTenSV').innerHTML = sinhVien.tenSV;
    getEle('spanMaSV').innerHTML = sinhVien.maSV;
    getEle('spanLoaiSV').innerHTML = sinhVien.loaiSV;
    getEle('spanDTB').innerHTML = dtb;
    getEle('spanXepLoai').innerHTML = loai;
};

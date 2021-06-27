function DanhSachNhanVien() {
    this.arr = [];
}
DanhSachNhanVien.prototype.themNhanVien = function (nhanVien) {
    this.arr.push(nhanVien);
};
DanhSachNhanVien.prototype.timViTri = function (maNV) {
    // findIndex
    // var viTri = this.arr.findIndex(function(nv){
    //     return maNV === nv.maNV;
    // })
    return this.arr.findIndex(function (nv) {
        return maNV === nv.maNV;
    });
};
DanhSachNhanVien.prototype.xoaNhanVien = function (maNV) {
    var viTri = this.timViTri(maNV);
    if (viTri !== -1) {
        this.arr.splice(viTri, 1);
    }
};
DanhSachNhanVien.prototype.suaNhanVien = function (maNV) {
    var viTri = this.timViTri(maNV);
    if (viTri !== -1) {
        this.arr.splice(viTri, 1);
    }
};
DanhSachNhanVien.prototype.layThongTinNhanVien = function (maNV) {
    console.log('Prototype');
    var viTri = this.timViTri(maNV);

    // if (viTri !== -1) {
    //     return this.arr[viTri];
    // }
    if (viTri !== -1) return this.arr[viTri];
};
console.log(DanhSachNhanVien.prototype);
DanhSachNhanVien.prototype.capNhatNhanVien = function (nhanVien) {
    var viTri = this.timViTri(nhanVien.maNV);

    if (viTri !== -1) return (this.arr[viTri] = nhanVien);
};
DanhSachNhanVien.prototype.timKiemNhanVien = function (keyword) {
    // var mangTimKiem = [];
    // mangTimKiem = this.arr.filter(function (nv) {
    //     return nv.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // });
    // return mangTimKiem;

    return this.arr.filter(function (nv) {
        return nv.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
};

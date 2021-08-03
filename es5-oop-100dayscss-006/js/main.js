// Đăng kí sự kiện cho nút xuatThongTin
function getEle(id) {
    return document.getElementById(id);
}
getEle('xuatThongTin').addEventListener('click',function () {  
    getEle('ten').innerHTML = namecard.ten;
    getEle('chucVu').innerHTML = namecard.chucVu;
    getEle('baiViet').innerHTML = namecard.baiViet;
    getEle('luotThich').innerHTML = namecard.luotThich;
    getEle('nguoiTheoDoi').innerHTML = namecard.nguoiTheoDoi;
})
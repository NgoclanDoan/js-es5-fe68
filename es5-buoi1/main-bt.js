/**
 * Bài tập tính điểm trung bình và xếp hạng sinh viên
 */

var tinhDiemTB = function (dToan, dLy, dHoa) {
    // var dtb = (dToan + dLy + dHoa) / 3;
    // return dtb;
    return (dToan + dLy + dHoa) / 3;
};

var xepLoai = function () {
    var dtb = tinhDiemTB(5, 8, 7);
    var xepLoai = '';

    if (dtb >= 9 && dtb< 10) {
        xepLoai = 'Xuất sắc';
    } else if (dtb >= 8 && dtb < 9) {
        xepLoai = 'Giỏi';
    } else if (dtb >= 7 && dtb < 8) {
        xepLoai = 'Khá';
    } else if (dtb >= 8 && dtb < 7) {
        xepLoai = 'Trung bình khá';
    } else if (dtb >= 5 && dtb < 6) {
        xepLoai = 'Trung bình';
    } else {
        xepLoai = 'Yếu';
    }
    console.log('Xếp loại:' + xepLoai);
};
xepLoai();

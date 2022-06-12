function getEle(id) {
    return document.getElementById(id)
}

function caculatetTip() {
    var tongBill = getEle("billamt").value;
    var hailongVaTip = getEle("serviceQual").value;
    var soNguoiShare = getEle("peopleamt").value;

    //Validation 
    if (tongBill === "" || hailongVaTip == 0) {
        alert("Vui lòng chọn giá trị!");
        return;
    }

    //Kiểm tra có nhập vào số người share tip hay không
    if (soNguoiShare === "" || soNguoiShare <= 1) {
        soNguoiShare = 1;
        getEle("each").style.display = "none";
    } else {
        getEle("each").style.display = "block";
    }

    //Tính toán
    var tongTip = (tongBill * hailongVaTip) / soNguoiShare;
    //Lam tron 2 chu so thap phan
    tongTip = Math.round(tongTip * 100) / 100;
    // Dam bao co hai chu so o phan thap phan
    tongTip = tongTip.toFixed(2);

    //Hien thi vung div tien tip
    getEle("totalTip").style.display = "block";
    getEle("tip").innerHTML = tongTip;

}
//An vung div tien tip
getEle("totalTip").style.display = "none";
getEle("each").style.display = "none";

// Cach goi event dieu nghe
getEle("calculate").onclick = function() {
    caculatetTip();
}
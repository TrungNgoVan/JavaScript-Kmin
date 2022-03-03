let acIndex = 0;
let imgArray = document.getElementsByClassName('slides');

imgArray[acIndex].style.display = 'block';

function hienSlide(k) {
    imgArray[k].style.display = 'block';
}

function anSlide(k) {
    imgArray[k].style.display = 'none';
}

function hienThiSlideTruocDo() {
    anSlide(acIndex);
    if (acIndex <= 0) {
        acIndex = imgArray.length - 1;
    }
    else acIndex -= 1;
    hienSlide(acIndex);
}

function hienThiSlideKeTiep() {
    anSlide(acIndex);
    if (acIndex >= imgArray.length - 1) {
        acIndex = 0;
    }
    else acIndex += 1;
    hienSlide(acIndex)
}

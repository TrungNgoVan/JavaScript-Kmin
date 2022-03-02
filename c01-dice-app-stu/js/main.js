function rollRandom(left, right){
    let result = Math.floor(Math.random() * (right - left + 1)) + left;
    return result;
}

function change(){
    let number1 = rollRandom(1,6);
    let number2 = rollRandom(1,6);
    let img1 = document.getElementById("dice-1");
    let newLinkImg1 = "./img/dice" + number1 + ".png";
    img1.src = newLinkImg1;
    let img2 = document.getElementById("dice-2");
    let newLinkImg2 = "./img/dice" + number2 + ".png";
    img2.src = newLinkImg2;
}
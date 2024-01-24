const btn = document.getElementById("btn");
const kq = document.getElementById("check");

function random(length) {
    let result = '';
    const characters = '123456789JQKA';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        let temp = characters.charAt(Math.floor(Math.random() * charactersLength));
        if (temp === "1") {
            temp = "10";
        }
        result += temp;
        counter += 1;
    }
    return result;
}

function kt(str) {
    let count = 0;
    str = str.replace(/\s/g, '');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "J" || str[i] === "Q" || str[i] === "K") {
            count += 10;
        } else {
            count += parseInt(str[i]);
        }
    }
    return count;
}

let b = random(1) + " ";
b = random(1) + " ";
document.getElementById("player").innerHTML = b;

btn.addEventListener("click", () => {
    let a = random(1);
    b = b + a + " ";
    document.getElementById("player").innerHTML = b;
});

function hope(length) {
    let result = '';
    const characters = '123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

let c = random(1) + " " + random(1) + " ";

function ai() {
    if(kt(c)<=15){
        c += random(1) + " ";
    }
    if(kt(c)>=18){
        let d = hope(1);
        if(d===1){
            c += random(1);
        }
    }
    document.getElementById("bot").innerHTML = c;
}

kq.addEventListener("click", () => {
    let diem = kt(b);
    let diem2 = kt(c);
    if(kt(c)>21 && kt(b) < 22 && kt(b) > 15){
        document.getElementById("note").innerHTML = "You win";
    } else if(kt(c)===kt(b)){
        document.getElementById("note").innerHTML = "Draw";
    } else if (diem > 21 || diem < 16 || diem < diem2) {
        ai();
        document.getElementById("note").innerHTML = "You lose";
    } else {
        ai();
        document.getElementById("note").innerHTML = "You win";
    }
});


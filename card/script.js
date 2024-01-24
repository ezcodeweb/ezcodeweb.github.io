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
        if (str[i] === "A") {
            count += 11;
        } else if (str[i] === "J" || str[i] === "Q" || str[i] === "K") {
            count += 10;
        } else {
            count += parseInt(str[i]);
        }
    }
    return count;
}

function kt2(str) {
    str = str.replace(/\s/g, '');
    for (let i = 0; i < str.length; i++) {
        if (str.length === 2) {
            if(str[0] === "A" && kt(str[1]) === 10) {
                return "ace"; 
            } else if(str[0] === "A" && str[1] === "A") {
                return "special";
            } else {
                return "none";
            }
        }
    }
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
    while (kt(c)<=15){
        c += random(1) + " ";
    }
    if(kt(c)>=16){
        let d = hope(1);
        if(d === "1"){
            c += random(1);
        }
    }
    document.getElementById("bot").innerHTML = c;
}

kq.addEventListener("click", () => {
    let diem = kt(b);
    let diem2 = kt(c);
    let win = kt2(c);
    let win2 = kt2(b);
    if(win === "ace" && win2 === "ace") {
        ai();
        document.getElementById("note").innerHTML = "Draw";
    } else if (win === "special" && win2 === "ace") {
        ai();
        document.getElementById("note").innerHTML = "You lose";
    } else if (win === "special" && win2 === "special") {
        ai();
        document.getElementById("note").innerHTML = "Draw";
    } else if (win === "ace" && win2 === "special") {
        ai();
        document.getElementById("note").innerHTML = "You win";
    } else if (win === "special" && win2 === "ace") {
        ai();
        document.getElementById("note").innerHTML = "You lose";
    } else if (win === "special" && win2 === "none") {
        ai();
        document.getElementById("note").innerHTML = "You lose";
    } else if (win === "ace" && win2 === "none") {
        ai();
        document.getElementById("note").innerHTML = "You lose";
    } else if (win === "none" && win2 === "ace") {
        ai();
        document.getElementById("note").innerHTML = "You win";
    } else if (win === "none" && win2 === "special") {
        ai();
        document.getElementById("note").innerHTML = "You win";
    } else if(kt(c)>21 && kt(b) < 22 && kt(b) > 15){
        ai();
        document.getElementById("note").innerHTML = "You win";
    } else if(kt(c)===kt(b)){
        ai();
        document.getElementById("note").innerHTML = "Draw";
    } else if (diem > 21 || diem < 16 || diem < diem2) {
        ai();
        document.getElementById("note").innerHTML = "You lose";
    } else {
        ai();
        document.getElementById("note").innerHTML = "You win";
    }
});


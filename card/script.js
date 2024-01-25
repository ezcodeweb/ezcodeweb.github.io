const btn = document.getElementById("btn");
const kq = document.getElementById("check");


let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let seven = 0;
let eight = 0;
let nine = 0;
let ten = 0;
let J = 0;
let Q = 0;
let K = 0;
let A = 0;

function random(length) {
    let result = '';
    const characters = '123456789JQKA';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        let temp = characters.charAt(Math.floor(Math.random() * charactersLength));
        if (temp === "1") {
            temp = "10";
        } else if(temp === "2") {
            if(two===4){
                random(length);
            } else {
                two+=1;
            }
        } else if(temp === "3") {
            if(three===4){
                random(length);
            } else {
                three+=1;
            }
        } else if(temp === "4") {
            if(four===4){
                random(length);
            } else {
                four+=1;
            }
        } else if(temp === "5") {
            if(five===4){
                random(length);
            } else {
                five+=1;
            }
        } else if(temp === "6") {
            if(six===4){
                random(length);
            } else {
                six+=1;
            }
        } else if(temp === "7") {
            if(seven===4){
                random(length);
            } else {
                seven+=1;
            }
        } else if(temp === "8") {
            if(eight===4){
                random(length);
            } else {
                eight+=1;
            }
        } else if(temp === "9") {
            if(nine===4){
                random(length);
            } else {
                nine+=1;
            }
        } else if(temp === "10") {
            if(ten===4){
                random(length);
            } else {
                ten+=1;
            }
        } else if(temp === "J") {
            if(J===4){
                random(length);
            } else {
                J+=1;
            }
        } else if(temp === "Q") {
            if(Q===4){
                random(length);
            } else {
                Q+=1;
            }
        } else if(temp === "K") {
            if(K===4){
                random(length);
            } else {
                K+=1;
            }
        } else if(temp === "A") {
            if(A===4){
                random(length);
            } else {
                A+=1;
            }
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
            if (kt(str.replace("A", ""))<=10){
                count += 11;
            } else if (kt(str.replace("A", ""))>=12){
                count += 1;
            } else if (kt(str.replace("A", ""))===11){
                count += 10;
            }
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
            } else if(str[1] === "A" && kt(str[0]) === 10) {
                return "ace"; 
            } else if(str[1] === "A" && str[0] === "A") {
                return "special";
            } else {
                return "none";
            }
        } else {
            return "none";
        }
    }
}

let b = random(1) + " " + random(1) + " ";

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
    if(kt(c)>=16 && kt(c) <= 18){
        let d = hope(1);
        if(d === "1"){
            c += random(1);
        }
    }
    document.getElementById("bot").innerHTML = c;
}

function fifth(d) {
    d = d.replace(/\s/g, '');
    if(d.length === 5 && kt(d) <= 21) {
        return "mega";
    } else {
        return "none";
    }
}

kq.addEventListener("click", () => {
    let diem = kt(b);
    let diem2 = kt(c);
    let win = kt2(c);
    let win2 = kt2(b);
    let ngu = fifth(c);
    let ngu2 = fifth(b);
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
    } else if (ngu === "none" && ngu2 === "mega") {
        ai();
        document.getElementById("note").innerHTML = "You win";
    } else if (ngu === "mega" && ngu2 === "none") {
        ai();
        document.getElementById("note").innerHTML = "You lose";
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


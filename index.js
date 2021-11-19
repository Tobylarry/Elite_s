let day = document.querySelector("#getd");
let hour = document.querySelector("#hour");
let min = document.querySelector("#mins");
let sec = document.querySelector("#sec");
let day2 = document.querySelector("#getd2");
let hour2 = document.querySelector("#hour2");
let min2 = document.querySelector("#mins2");
let sec2 = document.querySelector("#sec2");


var x = setInterval(count, 1000)

function count() {

    const deadline = new Date("January 31, 2022 15:37:25").getTime()

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    let now = new Date().getTime()
    let countDown = deadline - now;
    let dy = addZero(Math.floor(countDown / (1000 * 60 * 60 * 24)));
    let hr = addZero(Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let mn = addZero(Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)));
    let sc = addZero(Math.floor((countDown % (1000 * 60)) / 1000));

    if (dy < 0) {
        clearInterval(x);
        document.getElementById("head").innerHTML = "EXPIRED";
    } else {
        day.innerHTML = dy
        day2.innerHTML = dy
        hour.innerHTML = hr
        hour2.innerHTML = hr
        min.innerHTML = mn
        min2.innerHTML = mn
        sec.innerHTML = sc
        sec2.innerHTML = sc

    }
}
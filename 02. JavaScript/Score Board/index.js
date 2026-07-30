let atick = document.getElementById("atick-points");
let gummy = document.getElementById("gummy-points");
let atickScore = 0;
let gummyScore = 0;

function atick_points() {
    atickScore += 1;
    atick.innerText = atickScore;
}

function gummy_points() {
    gummyScore += 1;
    gummy.innerText = gummyScore;
}

function reset() {
    atickScore = 0;
    gummyScore = 0;
    atick.innerText = atickScore;
    gummy.innerText = gummyScore;
}
function digitalClock(sec) {

    let hr = Math.floor(sec / 3600);
    sec = sec - (hr * 3600);

    let min = Math.floor(sec / 60);
    sec = sec - (min * 60);

    if (hr >= 24) {
        hr = hr - 24;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }
    return hr + ":" + min + ":" + sec;
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));
function repeat() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(repeat, 1000);
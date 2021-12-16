let main = document.querySelector('main');
let time = ["day", "hour", "min", "sec"];

let wayDown = new CountDown(main, "");
wayDown.createFrame("30vw", "10vh", time, "1px solid black");

wayDown.goDown();
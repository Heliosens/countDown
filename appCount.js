let main = document.querySelector('main');
let time = ["day", "hour", "min", "sec"];

let test = new CountDown(main, "");
test.createFrame("40vw", "10vh", time, "1px solid black");


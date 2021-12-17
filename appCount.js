let main = document.querySelector('main');

let wayDown = new CountDown();

wayDown.createEnd(main,'testEnd');

wayDown.createFrame(main,"40vw", "10vh", "test");

wayDown.goDown();

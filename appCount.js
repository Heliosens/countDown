let main = document.querySelector('main');

let wayDown = new CountDown(["jour", "Heure", "Minute", "Seconde"]);

wayDown.userTime(main,'testEnd');
wayDown.reset('testEnd');

wayDown.createFrame(main,"60vw", "10vh", "test");
wayDown.goDown();




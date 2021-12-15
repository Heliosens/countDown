let CountDown = function (targetElem, endTime){

    this.end = endTime;

    this.createFrame = function (w, h, section, border){
        let frame = document.createElement('div');
        frame.className = "wayDown";
        frame.style.width = w;
        for(let item of section){
            let box = document.createElement('div');
            box.style.width = (100/section.length) + "%";
            box.style.height = h;
            box.style.border = border;
            box.innerHTML = item;
            frame.appendChild(box);
        }
        targetElem.appendChild(frame);
    }

    this.goDown = function (){

    }
}
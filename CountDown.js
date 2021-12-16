let CountDown = function (targetElem, endTime){

    this.end = endTime;

    /**
     *
     * @param w
     * @param h
     * @param section = day / hour / min / sec
     * @param border
     */
    this.createFrame = function (w, h, section, border){
        let field = document.createElement('input');
        field.type = "date";
        targetElem.appendChild(field);
        let frame = document.createElement('div');
        frame.className = "frame";
        frame.style.textAlign = "center";
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
        let date = Date();
        console.log(date);
    }
}

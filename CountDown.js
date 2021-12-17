let CountDown = function (){

    this.section = ["Heure", "Minute", "Second"];

    this.createEnd = function (targetElem, id){
        // create container
        let container = document.createElement('div');
        container.id = id;
        container.style.padding = "1rem";
        container.style.display = "flex";

        // create input time
        let frame = document.createElement('div');
        frame.style.width = "50%"
        let newArray = this.section;
        for(let item of newArray){
            let div = document.createElement('div');
            div.style.width =  (100/this.section.length) + "%";
            let span = document.createElement('span');
            span.innerHTML = item;
            let box = document.createElement('input');
            box.style.width = '100%';
            box.style.height = '5vh';
            box.style.margin = "1px";
            div.appendChild(span);
            div.appendChild(box);
            frame.appendChild(div);
        }

        container.appendChild(frame);
        targetElem.appendChild(container);
    }

    /**
     * number = day + hour + min + sec
     * @param targetElem
     * @param w
     * @param h
     * @param id
     */
    this.createFrame = function (targetElem, w, h, id){
        // create container
        let frame = document.createElement('div');
        frame.style.padding = "1rem";
        frame.style.border = "1px solid black";
        frame.id = id;
        frame.style.textAlign = "center";
        frame.style.width = w;

        // create each number frame
        for(let item of this.section){
            let box = document.createElement('div');
            box.style.width = (100/this.section.length) + "%";
            box.style.height = h;
            box.style.border = "1px dashed black";
            box.style.margin = "1px";
            box.innerHTML = item;
            frame.appendChild(box);
        }
        targetElem.appendChild(frame);

        let start = document.createElement('input');
        start.type = "button";
        start.value = "Start";
        start.className = "startBtn";
        start.style.padding = '1vh 2vw';
        targetElem.appendChild(start);
    }

    this.goDown = function (){
        let date = new Date();
        console.log(date);
        let final = document.getElementById('final');

        document.getElementById('startBtn').addEventListener('click', function (){
            console.log(final.value);
        })

    }
}

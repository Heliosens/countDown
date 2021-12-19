
// type = ["jour", "Heure", "Minute", "Seconde"]
let CountDown = function (type){

    this.section = type;

    //todo adapt count down on type

    /**
     *
     * @param targetElem
     * @param id
     */
    this.userTime = function (targetElem, id){
        // create container
        let container = document.createElement('div');
        container.style.display = 'flex';
        // create input user time
        let frame = document.createElement('div');
        frame.id = id;
        frame.style.cssText = `
            border: 1px solid black;
            display: flex;
            justify-content: space-evenly;
        `;

        let newArray = ["Heure", "Minute", "Seconde"];
        for(let item of newArray){
            let div = document.createElement('div');
            div.style.width = "30%";
            let span = document.createElement('span');
            span.innerHTML = item;
            let box = document.createElement('input');
            box.type = 'number';
            box.value = '0';
            box.min = '0';
            box.style.cssText = `
                width: 8rem;
                font-size: 4rem;
                text-align: center;
                padding-left: .5rem;
            `;

            div.appendChild(span);
            div.appendChild(box);
            frame.appendChild(div);
        }

        // create reset btn
        let resetBtn = document.createElement('button');
        resetBtn.innerText = "reset";
        resetBtn.style.fontSize = "2rem";

        targetElem.appendChild(container).appendChild(frame);
        container.appendChild(resetBtn);
    }

    this.reset = function (id){
        let elem = document.getElementById(id);
        let btn = elem.parentElement.querySelector('button');
        let input = elem.getElementsByTagName('input');

        btn.addEventListener('click', function (){
            for (let item of input){
                item.value = "0";
            }
        })
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
        frame.style.cssText = `
            padding: 1rem;
            border: 1px solid black;
            text-align: center;
        `;
        frame.id = id;
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

    }


}

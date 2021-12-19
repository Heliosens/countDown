
// type = ["jour", "Heure", "Minute", "Seconde"]
let CountDown = function (targetElem, countId){

    this.element = targetElem;
    this.countId = countId;
    this.section = ["Heure", "Minute", "Seconde"];

    /**
     * create one frame for each time h,m,s on table
     */
    this.timeFrames = function (){
        let frame = document.createElement('div');
        frame.id = this.countId;
        frame.style.cssText = `
            border: 2px solid black;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        `;
        // create section
        for(let item of this.section){
            let section = document.createElement('section');
            section.style.display = 'flex';
            section.style.flexDirection = 'column';
            section.style.width = '8vw';
            let p = document.createElement('p');
            p.innerHTML = item;
            let input = document.createElement('input');
            input.style.fontSize = '4rem';
            input.type = 'number';
            input.min = '0';
            input.value = '59';
            let span = document.createElement('span');
            span.innerHTML = '0';
            span.style.fontSize = '4rem';
            span.style.border = "1px solid black";
            // span.style.display = 'none';
            frame.appendChild(section);
            section.appendChild(p);
            section.appendChild(input);
            section.appendChild(span);
        }
        let footer = document.createElement('footer');
        footer.style.flexBasis = '80%';
        footer.style.padding = '.5rem';
        footer.style.textAlign = 'center';
        frame.appendChild(footer);
        this.element.appendChild(frame);
    }

    this.commandBtn = function (){
        let elem = document.getElementById(this.countId);
        let input = elem.getElementsByTagName('input');
        let span = elem.getElementsByTagName('span');

        // reset to zero
        let resetBtn = document.createElement('button');
        resetBtn.innerText = 'Reset';
        resetBtn.style.cssText = `
            font-size: 1.8rem;
            padding: .5rem;
            margin: 0 2px;
        `;

        elem.querySelector("footer").appendChild(resetBtn);
        resetBtn.addEventListener('click', function (){
            for (let i = 0 ; i < input.length ; i++){
                input[i].value = "0";
                input[i].style.display = "block";
                span[i].style.display = "none";
            }
        });

        // back to value
        let init = document.createElement('button');
        init.innerText = 'Restart';
        init.style.cssText = `
            font-size: 1.8rem;
            padding: .5rem;
            margin: 0 2px;
        `;

        elem.querySelector("footer").appendChild(init);
        init.addEventListener('click', function (){
            for (let i = 0 ; i < input.length ; i++){
                input[i].style.display = 'none';
                span[i].style.display = 'block';
                span[i].innerHTML = input[i].value;
            }
        })

        // start - stop
        let start = document.createElement('button');
        start.innerText = "Start";
        start.style.cssText = `
            font-size: 1.8rem;
            padding: .5rem;
            margin: 0 2px;
        `;

        let stop = document.createElement('button');
        stop.innerText = 'Stop';
        stop.style.cssText = `
            font-size: 1.8rem;
            padding: .5rem;
            margin: 0 2px;
        `;

        elem.querySelector("footer").appendChild(start);
        elem.querySelector("footer").appendChild(stop);

        start.addEventListener('click', function (){
            for (let i = 0 ; i < input.length ; i++){
                input[i].style.display = 'none';
                span[i].style.display = 'block';
                span[i].innerHTML = input[i].value;
            }
            // actual value
            let date = new Date();
            console.log(date);


            stop.addEventListener('click', function (){
                // clear interval
            })
        });

    }

}

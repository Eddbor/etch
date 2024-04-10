const body = document.querySelector('body')
const container = document.querySelector('#container')
let x = NaN
let color1
let color2
let color3
let color4 = 1
const refuse = document.querySelector('.refuse')
const topbutton = document.querySelector('.buttons')

function question(){
    let size = +prompt("What's the size of the grid? (1-100)")
    gridsize()
    function gridsize(){
        if(Number.isNaN(size)){
            alert('A number please...')
        }else if(size == ''){   
            question()
        }else if(size > 100){   
            size = 100
            grid(size , size)
        }else if(size < 0){
            size = 1
            grid(size , size)
        }else{
            grid(size , size)
        }
    }

    const btnrgb = document.querySelector('#btnrgb')
    btnrgb.addEventListener('click' , () => {
        for(let i = 0; i < size; i++){
            const del = document.querySelector('.griddel')
            del.remove()
        }
        btnrgb.classList.toggle('rgbon');
        gridsize()
    });

    const btnreset = document.querySelector('#btnreset')
    btnreset.addEventListener('click' , () => {
        for(let i = 0; i < size; i++){
            const del = document.querySelector('.griddel')
            del.remove()
        }
        btnreset.classList.toggle('reseton');
        gridsize()
    });

    const btndark = document.querySelector('#btndark')
    btndark.addEventListener('click' , () => {
        for(let i = 0; i < size; i++){
            const del = document.querySelector('.griddel')
            del.remove()
        }
        btndark.classList.toggle('darkon');
        gridsize()
    });
}



function grid(linenumb , columnumb){
    for(let i = 0; i < linenumb; i++){
        const line = document.createElement('div')
        line.setAttribute('id' , 'line')
        line.classList.add('griddel')
        container.appendChild(line)

        for(let i = 0; i < columnumb; i++){
            const square = document.createElement('div')
            square.classList.add('square')
            line.appendChild(square)
            squaregrid()
            
            function squaregrid(){
                if(!(btnrgb.classList.contains('rgbon'))){
                    if(btndark.classList.contains('darkon')){
                            square.addEventListener('mouseover', () => {
                                purplecol()
                                square.style.cssText = `background-color: rgb(${color1} , ${color2} , ${color3}); border:solid 1px rgb(50, 5, 50)`
                                refuse.style.cssText = `-webkit-text-fill-color: rgb(${color1} , ${color2} , ${color3}) ; -webkit-text-stroke-width: 1px ; -webkit-text-stroke-color: rgb(${color1} , ${color2} , ${color3})`
                                topbutton.style.cssText = `-webkit-text-fill-color: rgb(${color1} , ${color2} , ${color3}) ; -webkit-text-stroke-width: 1px ; -webkit-text-stroke-color: rgb(${color1} , ${color2} , ${color3})`
                                
                                let squarebright = square.dataset.brightness || 100
                                if(squarebright > 0){
                                    squarebright = parseInt(squarebright) - 10
                                }
                                if (squarebright >= 0) {
                                    square.style.filter = `brightness(${squarebright}%)`;
                                    square.dataset.brightness = squarebright;
                                }

                                let refusebright = square.dataset.brightness || 100
                                refuse.style.filter = `brightness(${refusebright}%)`;
                            
                                let topbuttonbright = square.dataset.brightness || 100
                                topbutton.style.filter = `brightness(${topbuttonbright}%)`;
                            })
                    }else{
                        square.addEventListener('mouseover', () => {
                            purplecol()
                            square.style.cssText = `background-color: rgb(${color1} , ${color2} , ${color3}) ; border:solid 1px rgb(200, 100, 200)`
                            refuse.style.cssText = `-webkit-text-fill-color: rgb(${color1} , ${color2} , ${color3}) ; -webkit-text-stroke-width: 1px ; -webkit-text-stroke-color: rgb(${color1} , ${color2} , ${color3})`
                            topbutton.style.cssText = `-webkit-text-fill-color: rgb(${color1} , ${color2} , ${color3}) ; -webkit-text-stroke-width: 1px ; -webkit-text-stroke-color: rgb(${color1} , ${color2} , ${color3})`
                        })
                    }
                    
                }else if((btnrgb.classList.contains('rgbon'))){
                    if(btndark.classList.contains('darkon')){
                        square.addEventListener('mouseover', () => {
                            brightcol()
                            square.style.cssText = `background-color: rgb(${color1} , ${color2} , ${color3}); border:solid 1px rgb(50, 5, 50)`
                            refuse.style.cssText = `-webkit-text-fill-color: rgb(${color1} , ${color2} , ${color3}) ; -webkit-text-stroke-width: 1px ; -webkit-text-stroke-color: rgb(${color1} , ${color2} , ${color3})`
                            topbutton.style.cssText = `-webkit-text-fill-color: rgb(${color1} , ${color2} , ${color3}) ; -webkit-text-stroke-width: 1px ; -webkit-text-stroke-color: rgb(${color1} , ${color2} , ${color3})`
                            
                            let squarebright = square.dataset.brightness || 100
                            if(squarebright > 0){
                                squarebright = parseInt(squarebright) - 10
                            }
                            if (squarebright >= 0) {
                                square.style.filter = `brightness(${squarebright}%)`;
                                square.dataset.brightness = squarebright;
                            }

                            let refusebright = square.dataset.brightness || 100
                            refuse.style.filter = `brightness(${refusebright}%)`;
                            
                            let topbuttonbright = square.dataset.brightness || 100
                            topbutton.style.filter = `brightness(${topbuttonbright}%)`;
                        })
                    }else{
                        square.addEventListener('mouseover', () => {
                            brightcol()
                            square.style.cssText = `background-color: rgb(${color1} , ${color2} , ${color3}) ; border:solid 1px rgb(200, 100, 200)`
                            refuse.style.cssText = `-webkit-text-fill-color: rgb(${color1} , ${color2} , ${color3}) ; -webkit-text-stroke-width: 1px ; -webkit-text-stroke-color: rgb(${color1} , ${color2} , ${color3})`
                            topbutton.style.cssText = `-webkit-text-fill-color: rgb(${color1} , ${color2} , ${color3}) ; -webkit-text-stroke-width: 1px ; -webkit-text-stroke-color: rgb(${color1} , ${color2} , ${color3})`
                        })
                    }
                }
            }
            //Reset to default//
            if(btnreset.classList.contains('reseton')){
                square.addEventListener('mouseout', () => {
                    square.style.cssText = ''
                })
            }
        }
    }
}

//function only purples//
function purplecol(){
    color1 = Math.floor(Math.random() * 100 + 120)
    color2 = 5
    color3 = Math.floor(Math.random() * 255)
}

//function of only bright collors//
function brightcol(){
    if(Math.floor(Math.random() * 10) < 4){
        color1 = 255
        if(Math.floor(Math.random() * 10) < 6){
            color2 = Math.floor(Math.random() * 255)
            color3 = 0
        }else{
            color3 = Math.floor(Math.random() * 255)
            color2 = 0
        }
    }else if(Math.floor(Math.random() * 10) < 7){
        color2 = 255
        if(Math.floor(Math.random() * 10) < 6){
        color1 = Math.floor(Math.random() * 255)
            color3 = 0
        }else{
            color3 = Math.floor(Math.random() * 255)
            color1 = 0
        }
    }else if(Math.floor(Math.random() * 10) < 10){
        color3 = 255
        if(Math.floor(Math.random() * 10) < 6){
            color2 = Math.floor(Math.random() * 255)
            color1 = 0
        }else{
            color1 = Math.floor(Math.random() * 255)
            color2 = 0
        }
    }
//console.log(`${color2} , ${color1} , ${color3}`)//
}

// just a test with github

question()

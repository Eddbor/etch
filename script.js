const body = document.querySelector('body')
const container = document.querySelector('#container')
let x = NaN
let color1
let color2
let color3
const refuse = document.querySelector('.refuse')

function grid(linenumb , columnumb){
    for(let i = 0; i < linenumb; i++){
        const line = document.createElement('div')
        line.classList.add('line')
        container.appendChild(line)
        for(let i = 0; i < columnumb; i++){
            const square = document.createElement('div')
            square.classList.add('square')
            line.appendChild(square)
            //Purples/Pinks/Reds
            //square.addEventListener('mouseover', () => {
            //    color1 = Math.floor(Math.random() * 100 + 120)
            //    color2 = Math.floor(Math.random() * 255)
            //    square.style.cssText = `background-color: rgb(${color1}, 5, ${color2}) ; border:solid 1px rgb(200, 5, 200)`
            //})

            //only the bright RGBs
            square.addEventListener('mouseover', () => {
                test()
                square.style.cssText = `background-color: rgb(${color1} , ${color2} , ${color3}) ; border:solid 1px rgb(200, 5, 200)`
                refuse.style.cssText = `-webkit-text-fill-color: rgb(${color1} , ${color2} , ${color3}) ; -webkit-text-stroke-width: 1px ; -webkit-text-stroke-color: rgb(${color1} , ${color2} , ${color3})`
            })
            //Reset to default
            //square.addEventListener('mouseout', () => {
            //    square.style.cssText = ''
            //})
        }
    }
}

function question(){
    let size = +prompt("What's the size of the grid? (1-100)")
    let numb
    if(Number.isNaN(size)){
        alert('A number please...')
    }else if(size > 100){
        numb = 100
        grid(numb , numb)
    }else if(size < 0){
        numb = 1
        grid(numb , numb)
    }else{
        grid(size , size)
    }
}

function test(){
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
console.log(`${color2} , ${color1} , ${color3}`)
}

question()




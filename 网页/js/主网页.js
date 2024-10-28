const nav = document.querySelector('.nav')
const body = document .querySelector('body')
const scorllY = document.documentElement.scrollTop
const topPage = document.querySelector('.top')
const shortCut = document.querySelector('.shortcut')
const listButton = document.querySelectorAll('.second-button')
const list = document.querySelectorAll('.list')
const listBox = document.querySelector('.list-box')
const process  = document.querySelectorAll('.img-2 span img')
const img2 = document.querySelector('.img-2')
const thirdButton = document.querySelectorAll('.third-button')
const thirdBox = document.querySelector('.third-box')
const card = document.querySelectorAll('.card')
const choose = document.querySelector('.choose')
const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')
const cardfirstimg = document.querySelectorAll('.card-1-img')
const planet = document.querySelector('.planet')
const dot = document.querySelector('.dot-list')
const light = document.querySelectorAll('.day-light-item')
const cloud = document.querySelector('.cloud-list')
const background = document.querySelector('.mask .box .background')
const box = document.querySelector('.box')
const mask = document.querySelector('.mask')
const checkbox = document.querySelector('.mask .box-button input')

function mousecard (){
    
}

shortCut.style.opacity = 0
window.addEventListener('scroll',function(){
    const scrollNumber = document.documentElement.scrollTop
    if(scrollNumber >= 941){
        nav.style.display = "block"
        shortCut.style.display = "block"
        shortCut.style.animation = "jianchu-shortCut 1s ease-in-out forwards"
        nav.style.animation = "jianchu 1s ease-in-out forwards"
    }
    else {
        // shortCut.style.animation = "jianchu-shortCut-end .5s ease-in-out forwards"
        // nav.style.animation = "jianchu-end .5s ease-in-out forwards" 
        nav.style.display = "none"
        shortCut.style.display = "none"
    } 
})
listButton[0].addEventListener('click',function(){
    const list = document.querySelectorAll('.list')
    listBox.appendChild(list[0])    
})
listButton[1].addEventListener('click',function(){
    const list = document.querySelectorAll('.list')
    listBox.prepend(list[list.length - 1])
})
let img2Span = setInterval(function(){
    const listSpan = document.querySelectorAll('.img-2 span')
    img2.appendChild(listSpan[0])  
},3000)
img2.addEventListener('mouseover',function(){
    img2.style.zIndex = 1
})
img2.addEventListener('mouseleave',function(){
    img2.style.zIndex = 0
})
thirdButton[0].addEventListener('click',function(){
    let li = document.querySelectorAll('.third-box li')
    thirdBox.appendChild(li[0])    
})
thirdButton[1].addEventListener('click',function(){
    let li = document.querySelectorAll('.third-box li')
    thirdBox.prepend(li[li.length - 1]) 
})
for(let i=0;i<cardfirstimg.length;i++){
    cardfirstimg[i].addEventListener('click',function(){

    })
}
card[0].addEventListener('click',function(){
    choose.style.display = "none"
    card1.style.display = "block"
    card1.style.animation = "none"
    const backButton = document.querySelectorAll('.back-button')
    backButton[0].addEventListener('click',function(){
            card1.style.animation = "end 1s linear"
            choose.style.animation = "show 1s linear"
            setTimeout(function(){
                choose.style.display = "block"
                card1.style.display = "none"
            },1000)
    })
})
card[1].addEventListener('click',function(){
    choose.style.display = "none"
    card2.style.display = "block"
    card2.style.animation = "none"
    const backButton = document.querySelectorAll('.back-button')
    backButton[1].addEventListener('click',function(){
            card2.style.animation = "end 1s linear"
            choose.style.animation = "show 1s linear"
            setTimeout(function(){
                choose.style.display = "block"
                card2.style.display = "none"
            },1000)
    })
})
planet.addEventListener('click',function(){
    if(planet.classList.length === 1){
        cloud.classList.add('cloudRun')
        dot.classList.add('dotRun')
        for(let i=0;i<light.length;i++){
            light[i].classList.add('lightRun')
        }
        background.classList.add('backgroundRun')
        planet.classList.add('planetRun')
        mask.classList.add('maskRun')
    }
    else if((planet.classList.length === 2) && (planet.classList[1] === "planetRun")){
        dot.classList.add('dotBack')
        planet.classList.add('planetBack')
        for(let i=0;i<light.length;i++){
            light[i].classList.add('lightBack')
        }
        cloud.classList.add('cloudBack')
        setTimeout(function(){
            cloud.classList.add('cloudActive')
        },1801)
        background.classList.add('backgroundBack')
        mask.classList.add('maskBack')
    
        cloud.classList.remove('cloudRun')
        dot.classList.remove('dotRun')
        for(let i=0;i<light.length;i++){
            light[i].classList.remove('lightRun')
        }
        background.classList.remove('backgroundRun')
        planet.classList.remove('planetRun')
        mask.classList.remove('maskRun')
    }
    else {
        cloud.classList.add('cloudRun')
        dot.classList.add('dotRun')
        for(let i=0;i<light.length;i++){
        light[i].classList.add('lightRun')
        background.classList.add('backgroundRun')
        }
        planet.classList.add('planetRun')
        mask.classList.add('maskRun')

        cloud.classList.remove('cloudActive')
        dot.classList.remove('dotBack')
        planet.classList.remove('planetBack')
        for(let i=0;i<light.length;i++){
            light[i].classList.remove('lightBack')
        }
        cloud.classList.remove('cloudBack')
        background.classList.remove('backgroundBack')
        mask.classList.remove('maskBack')
    } 
})
box.style.width = 300 + "px"
function mouseLeave(){
    if(planet.classList[1] === "planetRun"){
        setTimeout(function(){
            planet.classList.add('planetHoverBack')
        },)
    }
    box.style.width = 100 + "px"
}
function mouseOver(){
    box.style.width = 300 + "px"
    if(planet.classList[2] === "planetHoverBack"){
        planet.classList.remove('planetHoverBack')
    }
}
checkbox.addEventListener('click',function(){
    if(checkbox.checked){
        box.style.width = 300 + "px"
        if(planet.classList[2] === "planetHoverBack"){
            planet.classList.remove('planetHoverBack')
        }
        box.removeEventListener('mouseleave',mouseLeave)
        box.removeEventListener('mouseover',mouseOver)
    }
    else{
        box.addEventListener('mouseleave',mouseLeave)
        box.addEventListener('mouseover',mouseOver)
    }
})


// ((planet.classList.length === 2) || (planet.classList[1] === "planetBack"))
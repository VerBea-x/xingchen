const button = document.querySelector('.button')
const buttonLeft = document.querySelector('.Left')
const buttonRight = document.querySelector('.Right')
const contain = document.querySelector('.container')
const content = document.querySelectorAll('.content')
const date = [
    {url:'../网页/image/1.webp'},
    {url:'../网页/image/2.webp'},
    {url:'../网页/image/3.webp'},
    {url:'../网页/image/4.webp'},
    {url:'../网页/image/5.webp'},
    {url:'../网页/image/6.webp'},
    {url:'../网页/image/7.webp'},
    {url:'../网页/image/8.webp'},
    {url:'../网页/image/9.webp'},
    {url:'../网页/image/10.webp'},
    {url:'../网页/image/11.webp'},
    {url:'../网页/image/12.webp'},
    {url:'../网页/image/13.webp'},
    {url:'../网页/image/14.webp'},
    {url:'../网页/image/15.jpg'},
    {url:'../网页/image/17.jpeg'},
    {url:'../网页/image/18.jpeg'},
    {url:'../网页/image/19.jpg'}
    ]
    function getRandom(N,M){
        return Math.floor(Math.random()*(M-N+2))
    }
    buttonLeft.onclick = function(){
        const list = document.querySelectorAll('.item')
        document.querySelector('.img').appendChild(list[0])
        let a = getRandom(1,18)
        list[0].style.backgroundImage = `url(${date[a].url})` 
    }
    buttonRight.onclick = function(){
        const list = document.querySelectorAll('.item')
        document.querySelector('.img').prepend(list[4])
        list[4].style.backgroundImage = `url(${date[getRandom(1,18)].url})`
    }
    start = setInterval(function(){
        buttonLeft.onclick()
    },5000)
    button.addEventListener('click',function(e){
        if(e.target.nodeName === 'SPAN'){
            clearInterval(start)
        }
        button.addEventListener('mouseover',function(){
            if(e.target.nodeName === 'SPAN'){
                clearInterval(start)
            }
        })
        button.addEventListener('mouseleave',function(){
            setTimeout(
                start = setInterval(function(){
                    buttonLeft.onclick()
                },5000),5000)
        })
    })

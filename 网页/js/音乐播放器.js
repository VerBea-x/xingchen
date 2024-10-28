const body = document.querySelector('body')
const playerWrap = document.querySelector('.play-wrap')
const playerInfo = document.querySelector('.player-info')
const info = document.querySelector('.info')
const name = document.querySelector('.singer-album')
const musicProgress = document.querySelector('.music-progress')
const progressTop = document.querySelector('.progress-top')
const audiocurrentTime = document.querySelector('.current-time')
const musicTime = document.querySelector('.music-time')
const progressBar = document.querySelector('.progress-bar')
const musicLine = document.querySelector('.music-line')
const playerControl = document.querySelector('.player-control')
const cover = document.querySelector('.cover')
const img = document.querySelector('.cover img')
const control = document.querySelector('.control')
const lastIcon = document.querySelector('.last-icon')
const startIcon = document.querySelector('.start-icon')
const nextIcon = document.querySelector('.next-icon')
const listIcon = document.querySelector('.list-icon')
const loopIcon = document.querySelector('.loop-icon')
const loopList = document.querySelector('.loop-list')
const maskBg = document.querySelector('.mask-bg')
const audio = document.querySelector('audio')
const shortCut = document.querySelector('.shortcut')
const musicList = document.querySelector('.music-list')
const topnav = document.querySelector('.top')
const title = document.querySelector('.title')
const close = document.querySelector('.close')
const listContent = document.querySelector('.list-content')
let musicName = document.querySelectorAll('.list-content .music-name')
const listStartIcon = document.querySelectorAll('.list-start-icon')
const progressSlider = document.querySelector('.progress-slider')
const date = [
    {name:'Die For You',
    audio_url:'../网页/audio/无畏契约 _ Grabbitz - Die For You (为你而战).flac',
    singer:'无畏契约/Grabbitz',
    album:'Die For You (为你而战)',
    cover:'../网页/image/Die For You (为你而战).jpg',time:'03:32'},
    // 第一个
    {name:'1年2ヶ月20日',
    audio_url:'../网页/audio/BRIGHT - 1年2ヶ月20日 (一年二个月又二十天、1年2个月20天) (一年二个月又二十天) (TV版_Single Version).ogg',
    singer:'BRIGHT',
    album:'LOVE~ある愛のカタチ~',
    cover:'../网页/image/1年2ヶ月20日 .jpg',
    time:'03:02'},
    // 第二个
    {name:'Titan',
    audio_url:'../网页/audio/Starlyte - Titan.flac',
    singer:'Starlyte',
    album:'Ninety9lives 93: Finish Him',
    cover:'../网页/image/Titan.jpg',
    time:'03:38'},
    // 第三个
    {name:'이젠 남',
    audio_url:'../网页/audio/Noblesse - 이젠 남 (Now, we are strangers) (现在是陌生人) (Inst_).flac',
    singer:'Noblesse (노블레스)',
    album:'이젠 남 (Now, we are strangers)',
    cover:'../网页/image/Noblesse (노블레스)_이젠 남 (Now, we are strangers)_0.jpg',
    time:'03:45'},
    // 第四个
    {name:'Hustler',
    audio_url:'../网页/audio/Zayde Wølf - Hustler.flac',
    singer:'Zayde Wølf',
    album:'Golden Age',
    cover:'../网页/image/hustler.jpg',
    time:'03:14'}
    // 第五个
]

let musicLists = []
let currentIndex = 0


$.ajax({
type: "get",
url: "./music.json",
dateType: "json",
success: function (data) {
    // console.log(data)
    length = data.length
    console.log(length);
    
    musicLists = data
    render(musicLists[currentIndex])
    renderMusicList(data)
    console.log(listContent.textContent);
    for (let i = 0 ; i<data.length;i++){
        listContent.children[i].children[1].addEventListener('click',function(e){
            let idNumber = +e.target.id
            // console.log(xuanzhong.textContent)
            // const xuanzhong = document.querySelector(".green")
            // const startwhite = document.querySelector(".white")
            render(musicLists[idNumber])
            removecss()
            infoOn()
            startIcon.innerHTML = ""
            listContent.children[idNumber].children[0].classList.add("green")
            listContent.children[idNumber].children[1].classList.add("white")
        })
    } 
} 
})

function getRandom(length){
    return Math.floor(Math.random()*length)
}
function render(data){
    // console.log(data)
    $(".name").text(data.name);
    $(".singer-album").text(`${data.singer} - ${data.album}`)
    $(".music-time").text(data.time)
    $(".cover img").attr("src",data.cover)
    $("audio").attr("src",data.audio_url)
    maskBg.style.backgroundImage = `url("${data.cover}")`
}
function infoOn(){
    playerInfo.style.top = -92 + "%"
    playerInfo.style.opacity = 1
    cover.style.animationPlayState = "running"
    cover.style.animation = "circle 5s infinite linear"
    audio.play()
    progressSlider.style.display = "inline-block"
    progressSlider.style.animation = "change .5s  linear forwards"
}
function infoOff(){
    playerInfo.style.top = -0 + "%"
    playerInfo.style.opacity = 0
    cover.style.animationPlayState = "paused"
    cover.style.animation = "none"
    audio.pause()
    progressSlider.style.display = "none"  
}
function removecss(){
    const elementg = document.querySelector(".green")
    const elementw = document.querySelector(".white")
    if(elementg){
        elementg.classList.remove("green")
        elementw.classList.remove("white")
    }
}
function formatTime(time){
    let min = parseInt(time / 60)
    let sec = parseInt(time % 60)
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return min+":"+sec
}
// function renderMusicList(list){
//     $.each(list,function(index,item){
//         let $li = $(`
//         <li class="${index == currentIndex ? "playing":""}">
//         <span class="music-name">0${index + 1}.${item.name} - ${item.singer})
//         </span>
//         <span class="list-start-icon"></span>
//         <li>`);
//         $(".music-list").append($li);
//     });
// }
function renderMusicList(date){
    for(let i = 0 ;i<date.length;i++){
        let newhtml = document.createElement('li')
        newhtml.innerHTML = `<span class="music-name" id=${i} >${date[i].name}</span>
        <span class="list-start-icon" id=${i} ></span>`
        listContent.appendChild(newhtml)
    }
}
function timeUpdate(){
        // 当前时间
        let cTime = audio.currentTime || 0;
        // 总时长
        let dtion = audio.duration || 0;
        audiocurrentTime.innerHTML = formatTime(cTime)
        musicTime.innerHTML = formatTime(dtion)
        let value = (this.currentTime/this.duration)*100
        musicLine.style.width = value + "%"
        progressSlider.value = value
        if(value === 100){
            cover.style.animationPlayState = "paused"
            cover.style.animation = "none"
            cover.style.transtion = `${1}s`
}
}
function ending(){
    this.currentTime = 0
    infoOn()
    listContent.children[currentIndex].children[0].classList.add("green")
    listContent.children[currentIndex].children[1].classList.add("white")
}
function random(){
    let origin = currentIndex
    currentIndex=getRandom(length)
    for(;;){
        if(origin === currentIndex){
            currentIndex = getRandom(length)
        }
        else {
            break
        }
    }
    render(musicLists[currentIndex])
    startIcon.innerHTML = ""
    infoOn()
    removecss()
    listContent.children[currentIndex].children[0].classList.add("green")
    listContent.children[currentIndex].children[1].classList.add("white")
}
function list(){
    currentIndex++
    if (currentIndex === length){
        currentIndex = 0
    }
    render(musicLists[currentIndex])
    startIcon.innerHTML = ""
    infoOn()
    removecss()
    listContent.children[currentIndex].children[0].classList.add("green")
    listContent.children[currentIndex].children[1].classList.add("white")
}
// renderMusicList(date)
// console.log(listContent.textContent);

startIcon.addEventListener('click',function(){
    if (startIcon.textContent === ""){
        startIcon.innerHTML = ""
        infoOn()
        removecss()
        listContent.children[currentIndex].children[0].classList.add("green")
        listContent.children[currentIndex].children[1].classList.add("white")
    }
    else {
        startIcon.innerHTML = ""
        infoOff()
        removecss()
        listContent.children[currentIndex].children[0].classList.add("green")
        listContent.children[currentIndex].children[1].classList.add("white")
    }
})
lastIcon.addEventListener('click',function(){
    currentIndex--
    if (currentIndex === -1){
        currentIndex = 4
    }
    render(musicLists[currentIndex])
    startIcon.innerHTML = ""
    infoOn()
    removecss()
    listContent.children[currentIndex].children[0].classList.add("green")
    listContent.children[currentIndex].children[1].classList.add("white")
})
nextIcon.addEventListener('click',function(){
    currentIndex++
    if (currentIndex === length){
        currentIndex = 0
    }
    render(musicLists[currentIndex])
    startIcon.innerHTML = ""
    infoOn()
    removecss()
    listContent.children[currentIndex].children[0].classList.add("green")
    listContent.children[currentIndex].children[1].classList.add("white")
})

audio.addEventListener("timeupdate", timeUpdate)

progressSlider.addEventListener('input',function() {
    // audio.paused()
        audio.removeEventListener('timeupdate',timeUpdate)
        musicLine.style.width = this.value + "%"
        // audio.currentTime = audio.duration * this.value / 100
        // 当前时间
        let cTime = audio.duration*this.value/100 || 0;
        audiocurrentTime.innerHTML = formatTime(cTime)
})

progressSlider.addEventListener('mouseup',function(){
    audio.currentTime = audio.duration * progressSlider.value / 100
    audio.addEventListener("timeupdate", timeUpdate)
})
if(loopIcon.innerHTML === ""){
    audio.addEventListener('ended',ending)
}
listIcon.addEventListener('click',function(){
    shortCut.style.display = "block"
    shortCut.style.animation = "change .5s  linear forwards"
    musicList.style.width = 30 + "%"
})
shortCut.addEventListener('click',function(e){
    if(e.target.classList.value === "shortcut"){
        shortCut.style.display = "none"
    }
    else 
    close.addEventListener('click',function(){
        shortCut.style.display = "none"
    })
})

loopIcon.addEventListener('click',function(){
    loopList.classList.toggle("way")
})
loopList.addEventListener('click',function(e){
    audio.removeEventListener('ended',ending)
    if(e.target.classList.value === "random"){
        loopList.classList.toggle("way")
        loopIcon.innerHTML = ""
        audio.addEventListener('ended',function(){
            let origin = currentIndex
            currentIndex=getRandom(length)
            for(let i = 0 ; i<length;i++){
                if(origin === currentIndex){
                    currentIndex = getRandom(length)
                }
                else {
                    break
                }
            }
            render(musicLists[currentIndex])
            startIcon.innerHTML = ""
            infoOn()
            removecss()
            listContent.children[currentIndex].children[0].classList.add("green")
            listContent.children[currentIndex].children[1].classList.add("white")
        })
    }
    if(e.target.classList.value === "list-loop"){
        loopList.classList.toggle("way")
        loopIcon.innerHTML = ""
        audio.removeEventListener('ended',ending)  &&
        audio.removeEventListener('ended',random)
        audio.addEventListener('ended',list)
        // audio.addEventListener('ended',function(){
        //     currentIndex++
        //     if (currentIndex === length){
        //         currentIndex = 0
        //     }
        //     render(musicLists[currentIndex])
        //     startIcon.innerHTML = ""
        //     infoOn()
        //     removecss()
        //     listContent.children[currentIndex].children[0].classList.add("green")
        //     listContent.children[currentIndex].children[1].classList.add("white")
        // })
    }
    if(e.target.classList.value === "single-loop"){
        const audio = document.querySelector("audio")
        loopList.classList.toggle("way")
        loopIcon.innerHTML = ""
        audio.removeEventListener('ended',random) &&
        audio.removeEventListener('ended',ending)
        if(audio.currentTime === audio.duration){
            audio.currentTime = 0
            infoOn()
            listContent.children[currentIndex].children[0].classList.add("green")
            listContent.children[currentIndex].children[1].classList.add("white")
        }
    }
})
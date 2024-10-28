const switchbtn = document.querySelectorAll('.switch-button')
const formbtn = document.querySelectorAll('.form-button')
const circleBottom = document.querySelector('.circleBottom')
const circleTop = document.querySelector('.circleTop')
const right = document.querySelector('.right')
const left = document.querySelector('.left')
const switchAll = document.querySelector('.switch')
const switchLeft = document.querySelector('.switchLeft')
const switchRight = document.querySelector('.switchRight')
const All = document.querySelector('.box')
const get = document.querySelector('.get')
const loadBtn = document.querySelector('#load')
const registerBtn = document.querySelector('#register')
const register = document.querySelector('.register')
const load = document.querySelector('.load')
const userf = document.querySelector('#userf')
const psdf =document.querySelector('#psdf')
const users = document.querySelector('#users')
const psds = document.querySelector('#psds')
const userName = document.querySelector('#userName')
const again = document.querySelector('#again')
const yanzheng = document.querySelector('#yanzheng')
const getyanzheng = document.querySelector('.get')
const cb_bd = document.querySelector('.cb-bd')
const psdIcon = document.querySelector('.psd-icon')
const users_signal = document.querySelector('.users-signal')
const savedData = localStorage.getItem('formData') 
const psdEye = document.querySelector('.psd-eye')
const registerInput = document.querySelectorAll('.register-input')
const forget = document.querySelector('.link')


function getRandom(MIN,MAX) {
    let random =  Math.floor(Math.random()*(MAX-MIN)+MIN)
    return random
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
function judge() {
    if (again.value !== "" && again.value !== psds.value){
        again.classList.add('border')
        psdIcon.innerHTML = ""
        psdIcon.style.color = "black"
        psdIcon.style.display = "inline-block"

    }
    else if(again.value !== "" && again.value === psds.value) {
        again.classList.remove('border')
        psdIcon.innerHTML = ""
        psdIcon.style.color = "#a0a5a8"
        psdIcon.style.display = "inline-block"
    }
    else {
        again.classList.remove('border')
        psdIcon.innerHTML = ""
        psdIcon.style.dispaly = "none"
    }
}
function checkbox() {
    if(cb_bd.checked){
        getyanzheng.disabled = false
        cb_bd.disabled = true
    }
    else {
        getyanzheng.disabled = true
    }
}
function getYanZheng() {
    cb_bd.removeEventListener('change',checkbox)
    cb_bd.style.cursor = "not-allowed"
    getyanzheng.disabled = true;
    let deadtime = 3
    getyanzheng.style.cursor = "not-allowed"
    getyanzheng.title = "60s后重新获取验证码"
    getyanzheng.innerHTML = `${deadtime}s后再获得`
    let n = setInterval(function(){
        deadtime--
        getyanzheng.innerHTML = `${deadtime}s后再获得`
        if(deadtime === 0){
        random = getRandom(1000,10000)
        alert(`${random}`)
        clearInterval(n)
        getyanzheng.disabled = false;
        getyanzheng.innerHTML = "获得验证码"
        getyanzheng.style.cursor = "pointer"
        return random
        }
    },1000) 
}

let random = getRandom(1000,10000)
users.focus()
register.reset()
getyanzheng.disabled = true
cb_bd.addEventListener('change',checkbox)
getyanzheng.addEventListener('click',getYanZheng)
again.addEventListener('input', judge)
users.addEventListener('input',function(){
    const inputValue = this.value;
    if (inputValue === ""){
        users.classList.remove('border')
        users_signal.style.display = "none"
    }
    else if (isValidEmail(inputValue)){
        users.classList.remove('border')
        users_signal.style.display = "none"
    }
    else {
        users.classList.add('border')
        users_signal.style.display = "inline-block"
    }
})
psdEye.addEventListener('click',function(){
    if(psdEye.innerHTML === ""){
        psdEye.style.color = "#a0a5a8"
        psdEye.innerHTML = ""
        psds.type = "password"
    }
    else {
        psdEye.style.color = "black"
        psdEye.innerHTML = ""
        psds.type = "text"
    }
})
loadBtn.addEventListener('click',function(e){
    e.preventDefault()
    const arr = [{
        userNameDataGet:"",
        usersEmailGet:"",
        psdsDataGet:""
    }]
    const userNameDataGet = localStorage.getItem("userNameData")
    const usersEmailGet = localStorage.getItem("usersEmail")
    const psdsDataGet = localStorage.getItem("psdsData")
    if(psdf.value === psdsDataGet && (userf.value === userNameDataGet || userf.value === usersEmailGet))
    {
        window.location.href = "./主网页 .html"
        alert('登陆成功')
    }
    else if(userf.value === "" || psdf.value === ""){
        alert("请输入账号和密码")
    }  
    else {
        // load.reset()
        alert('请输入正确的账号和密码') 
    }
    
})
registerBtn.addEventListener('click',function(e){
    // console.log(random)
    // console.log("--------")
    e.preventDefault()
    const userNameData = document.querySelector('#userName').value
    const usersEmail = document.querySelector('#users').value
    const psdsData = document.querySelector('#psds').value
    const formData = {
        userNameData: userNameData,
        usersEmail: usersEmail,
        psdsData: psdsData 
    }
    // localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem("psdsData",psdsData);
    localStorage.setItem('userNameData',userNameData);
    localStorage.setItem('usersEmail',usersEmail);
    if (registerInput[0].value === "" && registerInput[0].type !== "submit"){
        e.preventDefault()
        alert("请输入所有内容")
        registerInput[0].focus()
    }
    else if (registerInput[1].value === "" && registerInput[1].type !== "submit"){
        e.preventDefault()
        alert("请输入所有内容")
        registerInput[1].focus()
    }
    else if (registerInput[2].value === "" && registerInput[2].type !== "submit"){
        e.preventDefault()
        alert("请输入所有内容")
        registerInput[2].focus()
    }
    else if (registerInput[3].value === "" && registerInput[3].type !== "submit"){
        e.preventDefault()
        alert("请输入所有内容")
        registerInput[3].focus()
    }
    else if (isValidEmail(users.value) === false){
        e.preventDefault()
        alert("请输入正确的邮箱格式")
        // console.log(isValidEmail(users.value))
        users.focus()
    }
    else if (again.value !== psds.value){
        e.preventDefault()
        alert('再次输入密码')
        again.focus()
    }
    else if (cb_bd.checked === false){
        e.preventDefault()
        alert('请勾选同意框')
        cb_bd.focus()
    }
    else if  (+yanzheng.value !== random){
        e.preventDefault()
        alert('请重新进行验证')
    }
    else if (registerInput[4].value === "" && registerInput[4].type !== "submit"){
        e.preventDefault()
        alert("请输入所有内容")
        registerInput[4].focus()
    }
    else {
        userf.value = users.value
        psdf.value = psds.value
        switchbtn[1].click()
        register.reset()
        // console.log(random)
        // console.log("--------")
        // console.log(+getyanzheng.value !== random)
    }
    
    
})    
get.addEventListener('click',function(e){
    e.preventDefault()
})
All.addEventListener('click',function(e){
    // console.log(e.target.classList.value)
    if(e.target.classList.value === 'switch-button'){
        switchAll.classList.add('is-x')
        setTimeout(function(){
            switchAll.classList.remove('is-x')
        },1500)
        switchAll.classList.toggle('is-txr')
        switchAll.classList.toggle('is-txl')
        // circleBottom.classList.toggle('is-txr')
        // circleTop.classList.toggle('is-txr')

        switchLeft.classList.toggle("is-hidden")
        switchRight.classList.toggle("is-hidden")
        right.classList.toggle('z100')
        left.classList.toggle('z100')
        right.classList.toggle('z0')
        left.classList.toggle('z0')
        // left.classsList.toggle('is-z')
    }   
    
})
forget.addEventListener('click',function(){
    const password = localStorage.getItem("psdsData")
    let forgetRandom = getRandom(1000,10000)
    alert(`验证码是${forgetRandom}`)
    const forgetYanZheng = +prompt("请输入验证码")
    if(forgetYanZheng === forgetRandom){
        alert(`你的密码是${password}`)
        const panDuan = prompt("是否修改密码(是或否)")
        if(panDuan === "是"){
            const newPsd = prompt('请输入新密码')
            localStorage.setItem("psdsData",newPsd);
        }   
    }
    if(forgetYanZheng !== forgetRandom) {
        forgetRandom = getRandom(1000,10000)
        alert("验证错误")
        alert(`验证码是${forgetRandom}`)
        const forgetYanZheng = +prompt("请输入验证码")
        if(forgetYanZheng === forgetRandom){
            alert(`你的密码是${password}`)
            const panDuan = prompt("是否修改密码(是或否)")
            if(panDuan === "是"){
                const newPsd = prompt('请输入新密码')
                localStorage.setItem("psdsData",newPsd);
            }   
        }
    }

})

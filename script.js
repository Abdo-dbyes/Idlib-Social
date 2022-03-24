// Search Variable

let searchPosts = document.querySelector("nav .search-input")
let creatorsName = document.querySelectorAll(".post .info h4")
let Posts = document.querySelectorAll(".post")

// Create Posts
let createHead = document.querySelector("nav .create button")
let createSide = document.querySelector(".left > button")
let createPost = document.querySelector(".middle .create-post input")
let createPostParent = document.querySelector(".middle .create-post")

// ======= Search Creators ========= 

searchPosts.oninput = function searchOfPost () {
        Posts.forEach((ele)=> {
            ele.style.display = "none"
            if(ele.children[0].children[0].children[1].children[0].innerHTML.toLowerCase().startsWith(searchPosts.value.toLowerCase())){
                ele.style.display = "block"
        }   
    })
}
console.log()
searchPosts.onblur = () => Posts.forEach( (e) => e.style.display = "block")
// ========= Create Post From Header =========


createHead.addEventListener('click' , focusPost)
createSide.addEventListener('click' , focusPost)

function focusPost () {
    createPost.focus()
    createPostParent.classList.add('active')
}
createPost.onclick = () => createPostParent.classList.add('active') 
function removeClass(){
    createPostParent.classList.remove('active')
}


// ============== Menu Item =============
let menuItem = document.querySelectorAll('.menu-item')
menuItem.forEach( (e) => {
    e.addEventListener("click",() => {
        menuItem.forEach( (ele) => ele.classList.remove("active"))
        e.classList.add('active')
    })
})


// ============= Notification Btn ================
let NotificationSec =document.querySelector('.notification-list')
let notificationCount = document.querySelector('.menu-item span')

function openNotification() {
    NotificationSec.classList.toggle('active')
    notificationCount.style.display = "none"
    
}

// =========== Messages Btn ============
let messagesSection = document.querySelector('.right .messages-section')
let messagesCount = document.querySelector('.left .fa-solid.fa-message span')
let right = document.querySelector('.right')

function closeMessages() {
    messagesSection.classList.remove('active')
    right.style.display = "none"
}
window.onresize = () => {
    if(window.matchMedia('(min-width:992px)').matches){
        right.style.display = "block"
    }else {
        right.style.display = "none"
    }
}

function messagesFocus () {
    messagesCount.style.display = "none"
    right.style.display = "block"
    messagesSection.classList.add('active')
    if(window.matchMedia('(min-width:992px)').matches){
        setTimeout(() => messagesSection.classList.remove('active'),3000)
    }
}

// ====== search Messages =======
let searchMessages = document.querySelector('.messages-section .search input')
let allMessages = document.querySelectorAll('.messages .message')

searchMessages.oninput = function searchOfPost () {
    allMessages.forEach((ele)=> {
        ele.style.display = "none"
        if(ele.children[1].children[0].innerHTML.toLowerCase().startsWith(searchMessages.value.toLowerCase())){
            ele.style.display = "flex"
    }   
})
}



// ============ Theme Sitting ================
let themePrompt = document.querySelector('.theme-customize')
let fontSizeProgress = document.querySelectorAll('.theme .font-size .progres span')

function openTheme() {
    themePrompt.style.display = "block"
    
}


// -------- Close Theme Section --------
function closeTheme() {
    themePrompt.style.display = "none"
}

// ----------- Font Size ------------

fontSizeProgress.forEach((e) => {
    e.addEventListener('click', () => {
        fontSizeProgress.forEach((ele) => ele.classList.remove('active'))
        e.classList.add('active')
        setFontsize(e)
    })
})
let root = document.querySelector(':root')
function setFontsize (e) {
    
    if(e == document.querySelector(".progres :nth-child(1)")){
        if(window.matchMedia('(min-width:580px)').matches){
            root.style.fontSize = "12px"
        }else {
            root.style.fontSize = "6px"
        }
    }
    if(e == document.querySelector(".progres :nth-child(2)")){
        if(window.matchMedia('(min-width:580px)').matches){
            root.style.fontSize = "14px"
        }else {
            root.style.fontSize = "8px"
        }
    }
    if(e == document.querySelector(".progres :nth-child(3)")){
        if(window.matchMedia('(min-width:580px)').matches){
            root.style.fontSize = "16px"
        }else {
            root.style.fontSize = "10px"
        }
    }
    if(e == document.querySelector(".progres :nth-child(4)")){
        if(window.matchMedia('(min-width:580px)').matches){
            root.style.fontSize = "18px"
        }else {
            root.style.fontSize = "12px"
        }
    }
    if(e == document.querySelector(".progres :nth-child(5)")){
        if(window.matchMedia('(min-width:580px)').matches){
            root.style.fontSize = "20px"
        }else {
            root.style.fontSize = "14px"
        }
    }
}
window.onresize = () => {
    let fontSizeData = document.querySelector(".theme .font-size .progres span.active")
        setFontsize(fontSizeData)
}

// ---------- Color -----------
let colorOption = document.querySelectorAll('.color .color-options span')

// ----------- Color In LocalStorage----------
if(window.localStorage.getItem('color') == undefined){
    window.localStorage.setItem('color' , 252)
}
root.style.setProperty('--primary-color-hue',window.localStorage.getItem('color'))
function colorStorage(color) {
    window.localStorage.setItem('color',color)
}


colorOption.forEach((e) => {
    e.addEventListener('click' , () => {
        colorOption.forEach((e)=> e.classList.remove("active"))
        e.classList.add('active')
        changeColor()
    })
})

function changeColor () {
    let primary;
    let colorOptionDone = document.querySelectorAll('.color .color-options span.active')[0]
    if(colorOptionDone == document.querySelector(".color .color-options span:nth-child(1)")){
        primary = 252
    }
    if(colorOptionDone == document.querySelector(".color .color-options span:nth-child(2)")){
        primary = 52
    }
    if(colorOptionDone == document.querySelector(".color .color-options span:nth-child(3)")){
        primary = 352
    }
    if(colorOptionDone == document.querySelector(".color .color-options span:nth-child(4)")){
        primary = 152
    }
    if(colorOptionDone == document.querySelector(".color .color-options span:nth-child(5)")){
        primary = 202
    }
    colorStorage(primary)
    root.style.setProperty('--primary-color-hue',window.localStorage.getItem('color'))
    
}



// -------- Background ---------
let backgroundLight = document.querySelector(".background .light")
let backgroundDark = document.querySelector(".background .Dark")
let backgroundLightOut = document.querySelector(".background .Lights-out")
let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

// --------- background in localStorage ---------

if(window.localStorage.getItem('background') == undefined){
    window.localStorage.setItem('background',JSON.stringify(["17%","95%","100%"]))
}

darkColorLightness = JSON.parse(window.localStorage.getItem('background'))[0]
lightColorLightness = JSON.parse(window.localStorage.getItem('background'))[1]
whiteColorLightness = JSON.parse(window.localStorage.getItem('background'))[2]

let changBackground = () => {
    root.style.setProperty('--dark-color-lightness',darkColorLightness)
    root.style.setProperty('--light-color-lightness',lightColorLightness)
    root.style.setProperty('--white-color-lightness',whiteColorLightness)
}
changBackground()

backgroundLight.addEventListener('click', () => {
    darkColorLightness = `17%`;
    lightColorLightness = `95%`;
    whiteColorLightness = `100%`;
    window.localStorage.setItem('background',JSON.stringify([darkColorLightness,lightColorLightness,whiteColorLightness]))
    backgroundLight.classList.add('active')
    
    backgroundDark.classList.remove('active')
    backgroundLightOut.classList.remove('active')
    changBackground()
})

backgroundDark.addEventListener('click', () => {
    darkColorLightness = `95%`;
    lightColorLightness = `20%`;
    whiteColorLightness = `15%`;
    window.localStorage.setItem('background',JSON.stringify([darkColorLightness,lightColorLightness,whiteColorLightness]))
    backgroundDark.classList.add('active')
    
    backgroundLight.classList.remove('active')
    backgroundLightOut.classList.remove('active')
    changBackground()
})

backgroundLightOut.addEventListener('click', () => {
    darkColorLightness = `95%`;
    lightColorLightness = `10%`;
    whiteColorLightness = `0%`;
    window.localStorage.setItem('background',JSON.stringify([darkColorLightness,lightColorLightness,whiteColorLightness]))
    backgroundLightOut.classList.add('active')
    
    backgroundDark.classList.remove('active')
    backgroundLight.classList.remove('active')
    changBackground()
})
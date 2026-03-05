let td=document.querySelectorAll("td")
let t11=document.getElementById("t11")
let t12=document.getElementById("t12")
let t13=document.getElementById("t13")
let t21=document.getElementById("t21")
let t22=document.getElementById("t22")
let t23=document.getElementById("t23")
let t31=document.getElementById("t31")
let t32=document.getElementById("t32")
let t33=document.getElementById("t33")
let main=document.getElementById("main")
let table=document.getElementById("arena")
let check={t11:0,t12:0,t13:0,
           t21:0,t22:0,t23:0,
           t31:0,t32:0,t33:0}
let play=true
let count=0
const win=()=>{      
    if (check.t11===1 && check.t12===1 && check.t13===1 || check.t21===1 && check.t22===1 && check.t23===1 || check.t31===1 &&check.t32===1 && check.t33===1 || check.t11===1 && check.t21===1 && check.t31===1 || check.t12===1 && check.t22===1 && check.t32===1 || check.t13===1 && check.t23===1 && check.t33===1 || check.t11===1 && check.t22===1 && check.t33===1 || check.t13===1 && check.t22===1 && check.t31===1){
        main.textContent="Circle Wins"
        table.style.visibility="hidden" 
        }
        else if(check.t11===2 && check.t12===2 && check.t13===2 || check.t21===2 && check.t22===2 && check.t23===2 || check.t31===2 && check.t32===2 && check.t33===2 || check.t11===2 && check.t21===2 && check.t31===2 || check.t12===2 && check.t22===2 && check.t32===2 || check.t13===2 && check.t23===2 && check.t33===2 || check.t11===2 && check.t22===2 && check.t33===2 || check.t13===2 && check.t22===2 && check.t31===2)
            {
            main.textContent="Cross Wins"
            table.style.visibility="hidden"
            }}
                
const clr = () => {
    if(count === 9){
        td.forEach((x)=>{
        x.style.backgroundImage = "none"
        })
        for(let i in check){
        check[i] = 0
        }
        count = 0
        play = true
    }
}
td.forEach((td)=>{
    td.addEventListener("mouseover",(x)=>{
        x.target.style.backgroundColor="rgb(226, 218, 218)"
    })
    td.addEventListener("mouseout",(x)=>{
        x.target.style.backgroundColor="white"
    })
})
const circle=(x)=>{
    x.target.style.backgroundImage='url("pics/circle.png")'
}
const cross=(x)=>{
    x.target.style.backgroundImage='url("pics/cross.png")'
}
t11.addEventListener("click",(x)=>{
    count=count+1
    if (check.t11===0 && play===true){
        circle(x)
        play=false
        check.t11=1
    }else if(check.t11===0 && play===false){
        cross(x)
        play=true
        check.t11=2
    }
    setTimeout(win,1000)
    setTimeout(clr,1500)
    
})
t12.addEventListener("click",(x)=>{
    count=count+1
    if (check.t12===0 && play===true){
        circle(x)
        play=false
        check.t12=1
    }else if(check.t12===0 && play===false){
        cross(x)
        play=true
        check.t12=2
    }
    setTimeout(win,1000)
    setTimeout(clr,1500)
})
t13.addEventListener("click",(x)=>{
    count=count+1
    if (check.t13===0 && play===true){
        circle(x)
        play=false
        check.t13=1
    }else if(check.t13===0 && play===false){
        cross(x)
        play=true
        check.t13=2
    }
    setTimeout(win,1000)
    setTimeout(clr,1500)
})
t21.addEventListener("click",(x)=>{
    count=count+1
    if (check.t21===0 && play===true){
        circle(x)
        play=false
        check.t21=1
    }else if(check.t21===0 && play===false){
        cross(x)
        play=true
        check.t21=2
    }
    setTimeout(win,1000)
    setTimeout(clr,1500)
})
t22.addEventListener("click",(x)=>{
    count=count+1
    if (check.t22===0 && play===true){
        circle(x)
        play=false
        check.t22=1
    }else if(check.t22===0 && play===false){
        cross(x)
        play=true
        check.t22=2
    }
    setTimeout(win,1000)
    setTimeout(clr,1500)
})
t23.addEventListener("click",(x)=>{
    count=count+1
    if (check.t23===0 && play===true){
        circle(x)
        play=false
        check.t23=1
    }else if(check.t23===0 && play===false){
        cross(x)
        play=true
        check.t23=2
    }
    setTimeout(win,1000)
    setTimeout(clr,1500)
})
t31.addEventListener("click",(x)=>{
    count=count+1
    if (check.t31===0 && play===true){
        circle(x)
        play=false
        check.t31=1
    }else if(check.t31===0 && play===false){
        cross(x)
        play=true
        check.t31=2
    }
    setTimeout(win,1000)
    setTimeout(clr,1500)
})
t32.addEventListener("click",(x)=>{
    count=count+1
    if (check.t32===0 && play===true){
        circle(x)
        play=false
        check.t32=1
    }else if(check.t32===0 && play===false){
        cross(x)
        play=true
        check.t32=2
    }
    setTimeout(win,1000)
    setTimeout(clr,1500)
})
t33.addEventListener("click",(x)=>{
    count=count+1
    if (check.t33===0 && play===true){
        circle(x)
        play=false
        check.t33=1
    }else if(check.t33===0 && play===false){
        cross(x)
        play=true
        check.t33=2
    }
    setTimeout(win,1000)
    setTimeout(clr,1500)
})









let amount = 0
const more = document.getElementById("plus")
more.addEventListener('click',function(){
    amount = amount + 1;
    document.getElementById("counter").textContent= amount
})

let amount2 = 0
const add2 = document.getElementById("plus2")
add2.addEventListener('click',function(){
    amount2 = amount2 + 1;
    document.getElementById("counter2").textContent= amount2
})

/*remove*/
const remove = document.getElementById("minus")
remove.addEventListener('click',function(){
    amount = amount - 1;
    document.getElementById("counter").textContent= amount
})

const remove2 = document.getElementById("minus2")
remove2.addEventListener('click',function(){
    amount2 = amount2 - 1;
    document.getElementById("counter2").textContent= amount2
})

/*dark&light*/
let mode = false
const sun = document.getElementById("lightBt")
sun.addEventListener('click',function(){
    mode = true
    document.getElementById("text").classList.add("light")
    document.getElementById("hgfd").classList.add("light")
    document.getElementById("hgfd").classList.remove("dark") 
    document.getElementById("text").classList.remove("dark")
})

const moon = document.getElementById("darkBt")
moon.addEventListener('click',function(){
    mode = false
    document.getElementById("text").classList.add("dark")
    document.getElementById("hgfd").classList.add("dark")
    document.getElementById("hgfd").classList.remove("light") 
    document.getElementById("text").classList.remove("light") 
})
/*^^^ ITS NOT WORKING ^^^*/
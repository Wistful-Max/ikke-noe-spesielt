let amount = 0
const add = document.getElementById("plus")
add.addEventListener('click',function(){
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
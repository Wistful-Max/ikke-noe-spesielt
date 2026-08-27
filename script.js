let amount = 0
const add = document.getElementById("plus")
add.addEventListener('click',function(){
    amount = amount + 1;
    document.getElementById("counter").textContent= amount
})

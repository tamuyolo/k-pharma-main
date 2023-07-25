

// var add=document.querySelectorAll(".add")
// let items=0;
// let cartItems = document.querySelector(".cart")
// add.addEventListener('click',()=>{
//     items +=1
//     cartItems.textContent = items
// })

// add.forEach(ele => ele.addEventListener("click",()=>{
//     items +=1
//     cartItems.textContent = items
//     cartItems.style.backgroundColor = "blue"
    
// }))

    let cartIcon = document.querySelector("#cart-icon");   
    let cart = document.querySelector(".cart");     
    let closeCart = document.querySelector("#close-cart");  
    
    cartIcon.onclick = () => {
       cart.classList.add("active");
    };
    
    closeCart.onclick = () => {
        cart.classList.remove("active");
     };



var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: "#prev",
        prevEl: "#next",
    },
});

const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const cardList = document.querySelector('.card-list');

cartIcon.addEventListener('click', ()=>
    cartTab.classList.add('cart-tab-active'));


const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', ()=>cartTab.classList.remove('cart-tab-active'));


let productList = [];

const showCard = ()=>{
    productList.forEach(product =>{
        const orderCard = document.createElement('div');
        orderCard.classList.add('order-card');

        orderCard.innerHTML = `
         <div class="card-image">
            <img src="${product.image}" alt="">
        </div>
         <h4>${product.name}</h4>
        <h5 class="price">${product.price}}</h5>
        <a href="#" class="btn">Add to Cart</a>
        
        `;

        cardList.appendChild(orderCard);
    })
}



const initApp = () =>{
    fetch('product.json')
    .then(response => response.json())
    .then(data =>{

        productList = data;
       showCard();
     

     
    })

    .catch(error =>{
        console.error("error loading product.json:" , error);
    });
    
};

initApp()
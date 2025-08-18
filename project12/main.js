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

const cartlist = document.querySelector('.cart-list');

cartIcon.addEventListener('click', ()=>
    cartTab.classList.add('cart-tab-active'));


const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', ()=>cartTab.classList.remove('cart-tab-active'));


let productList = [];
let cartProduct = [];

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
        <a href="#" class="btn card-btn">Add to Cart</a>
        
        `;

        cardList.appendChild(orderCard);

        const cardBtn = orderCard.querySelector('.card-btn');
        cardBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            // alert('hi');

            addToCart(product);

        });
    });
};



const addToCart = (product) =>{

    const existingProduct = cartProduct.find(item => item.id === product.id);
    if(existingProduct){
        alert('you have already added in your cart!');
        return;
    }
    else{
        cartProduct.push(product);


    }
    let quantity = 1;

    let price = parseFloat(product.price.replace('$', ''));

    const cartItem = document.createElement('div');
    cartItem.classList.add('item');
    cartItem.innerHTML = `
    <div class="item-image">
        <img src="${product.image}">
    </div>
    <div class = "details">
        <h4>${product.name}</h4>
        <h4 class="item-total">${product.price}</h4>
    </div>

    <div class="flex value">
        <a href="#" class="quantity-btn minus">
            <i class="fa-solid fa-minus"></i>
        </a>
        <h4 class="quantity-value">${quantity}</h4>
        <a href="#" class="quantity-btn plus">
            <i class="fa-solid fa-plus"></i>
        </a>
    </div>                       
    
    `;

    cartlist.appendChild(cartItem);
    

    const plusBtn = cartItem.querySelector('.plus');
    const minusBtn = cartItem.querySelector('.minus');

    const quantityValue = cartItem.querySelector('.quantity-value');

    const itemTotal = cartItem.querySelector('.item-total');
    plusBtn.addEventListener('click', (e)=>{

        e.preventDefault();
        quantity++;
        quantityValue.textContent = quantity;
        itemTotal.textContent = `$${(quantity*price).toFixed(2)}`;
    });
    minusBtn.addEventListener('click', (e)=>{

        e.preventDefault()
        if(quantity>1){
            quantity--
            quantityValue.textContent = quantity;
            itemTotal.textContent = `$${(quantity*price).toFixed(2)}`;

        }
        else{
            
            cartProduct = cartProduct.filter(item => {item.id !== product.id});
            cartItem.remove();
        }
            
        
        
    });

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
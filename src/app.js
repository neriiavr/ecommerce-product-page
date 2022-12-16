window.cart = []

function increaseProductCount() {
    let currentCount = parseInt(document.querySelectorAll('.product-count')[0].innerHTML)

    currentCount = currentCount + 1;

    document.querySelectorAll('.product-count')[0].innerHTML = currentCount;
}

function decreaseProductCount() {
    let currentCount = parseInt(document.querySelectorAll('.product-count')[0].innerHTML)

    currentCount = currentCount - 1;

    document.querySelectorAll('.product-count')[0].innerHTML = currentCount;
}

function addToCart() {
    const itemCount = parseInt(document.querySelectorAll('.product-count')[0].innerHTML)
    const itemName = document.querySelectorAll('.product-name')[0].innerHTML
    const itemPrice = document.querySelectorAll('.product-price')[0].innerHTML
    const itemImage = document.querySelectorAll('.product-image img')[0].src

    window.cart = [...window.cart, {name: itemName, count: itemCount, price: itemPrice, image: itemImage}]

    document.querySelector('.cart-has-items').className = "cart-has-items";
}

function toggleCart() {
    if (document.querySelector('.cart-box').className === "cart-box") {
        document.querySelector('.cart-box').className = "cart-box hidden"
    } else {
        document.querySelector('.cart-box').className = "cart-box";

        renderCartContent()
    }
}

function renderCartContent() {
    console.log(window.cart)

    document.querySelector('.cart-box').innerHTML = window.cart.map(cartItem => `
        <div class="cart-item">
            <img href="${cartItem.itemImage}" />
            <span>${cartItem.name}</span>
            <span>X</span>
            <span>${cartItem.count}</span>
            <span>${cartItem.price}</span>
        </div>
    `)
}










document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-carousel', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : false,
    } );
  
    var thumbnails = new Splide( '#thumbnail-carousel', {
      fixedWidth  : 100,
      fixedHeight : 60,
      gap         : 10,
      rewind      : true,
      pagination  : false,
      isNavigation: true,
      breakpoints : {
        600: {
          fixedWidth : 60,
          fixedHeight: 44,
        },
      },
    } );
  
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
  } );
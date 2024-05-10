// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})



  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountElement = document.querySelector('.cart-count');

    let cartCount = 0;

    addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
      event.preventDefault();

      const productBox = event.target.closest('.box');
      const productName = productBox.querySelector('.detail-box h6').textContent;
      const productPrice = productBox.querySelector('.detail-box span').textContent;

      const item = {
        name: productName.trim(),
        price: parseFloat(productPrice.trim().replace(',', ''))
      };

      addToCartFunction(item);
      cartCount++;
      updateCartCount();
      alert('Item added to cart!');
    }

    function addToCartFunction(item) {
      console.log('Item added to cart:', item);
      // Implement your cart functionality here
    }

    function updateCartCount() {
      cartCountElement.textContent = cartCount;
    }
  });






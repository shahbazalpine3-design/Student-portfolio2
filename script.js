
// CART FUNCTIONALITY

let cartCount = 0;

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {

    button.addEventListener("click", function() {

        cartCount++;

        document.getElementById("cart-count").innerText = cartCount;

        alert(this.dataset.name + " added to cart!");

    });

});


// SEARCH FUNCTIONALITY

const searchForm = document.getElementById("search-form");

const searchInput = document.getElementById("search");

const products = document.querySelectorAll(".product");

const noResults = document.getElementById("no-results");


// Search on button click
searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    filterProducts();

});


// Search while typing
searchInput.addEventListener("input", filterProducts);


function filterProducts() {

    let value = searchInput.value.toLowerCase().trim();

    let found = 0;

    products.forEach(product => {

        let name = product.innerText.toLowerCase();

        if (name.includes(value)) {

            product.style.display = "";

            found++;

        } else {

            product.style.display = "none";

        }

    });

    noResults.style.display = found === 0 ? "block" : "none";

}

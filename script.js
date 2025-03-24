
const params = new URLSearchParams(window.location.search);
const category = params.get('category');

const shoppingImage = document.getElementById("image-container");
let cart = JSON.parse(localStorage.getItem("cart"));
// Fetch data using then()
fetch('data.json')
    .then(response => response.json())
    .then(data => {
    
            for (let i = 0; i < data[category].length; i++) {
                const item = data[category][i];
                console.log(data[category][i]); 

                const itemDiv = document.createElement("div");
                itemDiv.classList.add("images-items");

                // Normal Image
                const img = document.createElement("img");
                img.classList.add("normal");
                img.src = item.image;
                itemDiv.appendChild(img);

                // Hover Image
                const hoverImg = document.createElement("img");
                hoverImg.classList.add("hover");
                hoverImg.src = item.hoverImage;
                itemDiv.appendChild(hoverImg);

                // Name
                const bagName = document.createElement("p");
                bagName.classList.add("bag-name");
                bagName.innerText = item.name;
                itemDiv.appendChild(bagName);

                // Price
                const price = document.createElement("p");
                price.classList.add("price");
                price.innerText = item.price;
                itemDiv.appendChild(price);

                // Like Icon
                const likeIcon = document.createElement("i");
                likeIcon.classList.add("fa-regular", "fa-heart", "button-icon");
                itemDiv.appendChild(likeIcon);

                //  addToCart
                const addToCartButton = document.createElement("button"); 
                addToCartButton.innerText = "Add to Cart";
                addToCartButton.classList.add("add-to-cart")
                itemDiv.appendChild(addToCartButton);

            
                addToCartButton.addEventListener("click", () => {
                    cart.push(item);
                    localStorage.setItem("cart", JSON.stringify(cart)); 
                    console.log("Item added to cart:", item);
                   
                });

                // Like button ka toggle function
                likeIcon.addEventListener("click", () => {
                    likeIcon.classList.toggle("fa-solid");
                    likeIcon.style.color = likeIcon.classList.contains("fa-solid") ? "red" : "gray";
                });

                
                shoppingImage.appendChild(itemDiv);
            }

    })


    //  addToCart
    const cartItems = document.getElementById("cart-container");

if (cartItems) {
    let cartData = JSON.parse(localStorage.getItem("cart"));

    function renderCart() {
    
        if (cartData.length > 0) {
            for (let i = 0; i < cartData.length; i++) {
                const cartitem = cartData[i];

                const cartItemDiv = document.createElement("div");
                cartItemDiv.classList.add("cart-item");

                // Image
                const cartimg = document.createElement("img");
                cartimg.src = cartitem.image;
                cartimg.alt = cartitem.name;
                cartItemDiv.appendChild(cartimg);

                // Cart Info (Name + Price)
                const cartInfo = document.createElement("div");
                cartInfo.classList.add("cart-item-info");

                // Name
                const cartname = document.createElement("p");
                cartname.innerText = cartitem.name;
                cartInfo.appendChild(cartname);

                // Price
                const cartprice = document.createElement("p");
                cartprice.innerText = cartitem.price;
                cartInfo.appendChild(cartprice);

                cartItemDiv.appendChild(cartimg);
                cartItemDiv.appendChild(cartInfo);

                // Remove Button
                const removeButton = document.createElement("button");
                removeButton.innerText = "Remove";
                removeButton.addEventListener("click", () => {
                    removeItem(i);
                });
                cartItemDiv.appendChild(removeButton);

                cartItems.appendChild(cartItemDiv);
            }
        } else {
            cartItems.innerHTML = "<p>Your cart is empty</p>";
        }
    }

    // Remove function
    function removeItem(index) {
        cartData.splice(index, 1); 
        localStorage.setItem("cart", JSON.stringify(cartData)); 
        renderCart(); 
    }

    renderCart();
}



  
    













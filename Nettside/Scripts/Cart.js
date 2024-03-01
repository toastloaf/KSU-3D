// Get cart from cookie or initialize to an empty array if it doesn't exist
let cartItems;

if (document.cookie.includes('cart=')) {
    cartItems = JSON.parse(document.cookie.split('item=')[1]);
}
else {
    cartItems = [];
}

console.log(cartItems);

// Update cart display
function updateCart() {
    const emptyElement = document.getElementById('empty');
    const itemContainer = document.getElementById('itemContainer');

    // If cart is empty
    if (cartItems.length === 0) {
        emptyElement.style.display = 'block';
        itemContainer.style.display = 'none';
    } else {
        emptyElement.style.display = 'none';
        itemContainer.style.display = 'block';

        // Clear the itemContainer
        itemContainer.innerHTML = '';

        // Add each cart item to the itemContainer
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = item.name + ': ' + item.quantity; // Replace with your actual item properties
            itemContainer.appendChild(itemElement);
        });
    }
}

updateCart();
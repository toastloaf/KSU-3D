// Get cart from session storage or initialize to an empty array if it doesn't exist
let cartItems;

try {
    cartItems = JSON.parse(window.sessionStorage.getItem('cartItems'));
} catch (e) {
    cartItems = [];
}

if (!Array.isArray(cartItems)) {
    cartItems = [];
}

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
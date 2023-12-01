
// Check if there are items in the cart stored in local storage
const cartItems = JSON.parse(localStorage.getItem('cartItems'));

if (cartItems && cartItems.length > 0) {
    document.getElementById('empty').style.display = 'none';
} else {
    document.getElementById('empty').style.display = 'block';
}

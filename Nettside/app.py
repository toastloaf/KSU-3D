from flask import Flask, render_template, request, redirect, url_for, jsonify
import stripe

app = Flask(__name__)
stripe.api_key = 'keyhere'  # Replace with your Stripe secret key

@app.route('/')
def index():
    return render_template('Information.html')

@app.route('/Order')
def order():
    return render_template('Order.html')

@app.route('/Custom')
def custom():
    return render_template('costum.html')

@app.route('/Cart')
def cart():
    return render_template('Cart.html')

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    cartItems = request.get_json().get('cartItems')

    line_items = []
    for item in cartItems:
        price_id = getProductPrice(item['productId'])
        line_items.append({
            'price': price_id,
            'quantity': item['quantity']
        })

    session = stripe.checkout.Session.create(  # Corrected part
        line_items=line_items,
        mode='payment',
        success_url='https://example.com/success',  
        cancel_url='https://example.com/cancel',   
    )

    return jsonify({'id': session.id})

# Add other routes

def getProductPrice(productId):
    if productId == 'bagclip':
        return 'price_1ONa5FGWsGvUS6uHDkNWWhXZ'  # Replace with your Stripe price ID
    else:
        return 'price_123'  # Placeholder for other products
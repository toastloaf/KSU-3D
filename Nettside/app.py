from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

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
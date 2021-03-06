import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // console.log(cart);

    //sum cart total 
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    //tax added
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h4>order summary</h4>
            {/* using event handler ---------------------- */}
            <p>selected items : {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
            {props.children}
        </div>
    );
};

export default Cart;
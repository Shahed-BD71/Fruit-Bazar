import React from 'react';

const Cart = (props) => {
    const {cartItems} = props;
    console.log(cartItems)
    return (
        <div>
            {cartItems.length === 0 ? <div>cart is empty</div>:
                <div>You have {cartItems.length} item in cart</div>
            }
        </div>
    );
};

export default Cart;
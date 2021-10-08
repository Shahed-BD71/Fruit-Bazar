import React from "react";
import { Fragment } from "react/cjs/react.production.min";
const Cart = (props) => {
  const { cart } = props;
  // const total = cart.reduce((sum, ele) => sum+ele.count)
//   let total = 0;
//   for (let i = 0; i < cart.length; i++) {
//     total += cart[i].count;
//   }
//   console.log(cart.length);
  return (
    <Fragment>
      <div>
        {cart.length === 0 ? (
          <div>cart is empty</div>
        ) : (
          <div>You have {cart.length} item in cart</div>
        )}
      </div>
      <div className='cart'>
          <div className='cartItems'>
            {
                cart.map(item => (
                    <li key={item._id}>
                        <div>
                            <img src={item.image} alt={item.title}></img>
                        </div>
                        <div>
                            <h3>{item.title}</h3>
                            <button onClick={() => cart.removeFromCart(item)}>
                                Remove
                            </button>
                        </div>
                    </li>
                ))
            }
          </div>
      </div>
    </Fragment>
  );
};

export default Cart;

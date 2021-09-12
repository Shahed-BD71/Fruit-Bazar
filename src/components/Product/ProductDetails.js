import React from 'react';
import formatCurrency from '../../utilities';
import './Product.css'

const ProductDetails = ({pd, addToCart}) => {
    return (
        <div className='product'>
            <a href={'#' + pd._id}>
               <img src={pd.image} alt={pd.name}/>
               <h3>{pd.title}</h3>
            </a>
            <div className='product-price'>
               <h3>{formatCurrency(pd.price)}</h3>
               <button onClick={() => addToCart(pd)} className='button primary'>Add To cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
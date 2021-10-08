import React from 'react';
import { useState } from 'react';
import data from '../../productData';
import Cart from '../Cart/Cart';
import Filter from '../Filter/Filter';
import ProductDetails from './ProductDetails';

const Product = () => {
    const [cartItems, setCartItems] = useState([])
    const [product, setProduct] = useState({
        products: data,
        size: '',
        sort: '',
    })

    // add to cart section.. Problem in this section.
    const addToCart = (pd) => {
        console.log(cartItems)
        let alreadyInCart = false;
        if(!alreadyInCart){
            cartItems.push({...pd, count: 1});
        }
        cartItems.forEach(item => {
         if (item._id === pd._id) {
             item.count++;
             alreadyInCart = true;
            }   
        });
        setCartItems(cartItems)
    }
    const sortProduct = (e) => {
        const sort = e.target.value;
        setProduct((pd) => ({
            sort: sort,
            products: pd.products.slice().sort((a, b) => (
                sort === 'lowest' ?
                a.price > b.price ? 1:-1
                :
                sort === 'highest' ?
                a.price < b.price ? 1:-1
                :
                a._id > b._id ? 1:-1
            ))
        }))
    }

    const filterProduct = (e) => {
        if (e.target.value === "") {
            setProduct({size: e.target.value, products: data})
        }else
            setProduct({
            size: e.target.value,
            products: data.filter(data => data.availableSize.indexOf(e.target.value) >= 0)
        })
    }
    return (
        <main className='content'>
            <section className='main'>
                <Filter count={product.products} size={product.size} sort={product.sort} sortProduct={sortProduct} filterProduct={filterProduct}
                ></Filter>
                <div className="products">
                    {
                        product.products.map((pd) => (<ProductDetails addToCart={addToCart} pd={pd} key={pd._id}></ProductDetails>))
                    }
                </div>
            </section>
            <aside className='sidebar'>
               <Cart cart={setCartItems}></Cart>
            </aside>
        </main>
    );
};
export default Product;
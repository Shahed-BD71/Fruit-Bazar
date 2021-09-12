import React from 'react';
import Filter from '../Filter/Filter';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    return (
        <div className="grid-container">
            <header>
                <h1>RealKit Store</h1>
            </header>
            <main>
                <Product/>
            </main>
            <footer>
                <h3>All Right Reserved.</h3>
            </footer>
        </div>
    );
};

export default Home;
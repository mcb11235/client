import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList.js';

const Main = (props) => {
    
    const [products, setProducts] = useState([]);
    
    return (
        <div>
    	
           <ProductForm products={products} setProducts={setProducts} />
            <hr/>
           <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}
export default Main;



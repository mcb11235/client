import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {products.map((product, index) => {
                return <div key={index}> <p>{product.title}, {product.price}, {product.description}, <Link to={`/products/${product._id}`}> {product.title} details </Link> <Link to={`/products/edit/${product._id}`}> Edit {product.title}</Link></p><button onClick={(e)=>{deleteProduct(product._id)}}>DELETE</button></div>
})} </div>);}

export default ProductList;
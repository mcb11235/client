import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    const {products, setProducts} = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setProducts(res.data);
            })
        .catch((err) => {
            console.log(err);
        })
    });

    return (
        <div>
            {products.map((product, index) => {
                return <div key={index}> <p>{product.title}, {product.price}, {product.description}, <Link to={`/products/${product._id}`}> {product.title} details </Link></p></div>
})} </div>);}

export default ProductList;
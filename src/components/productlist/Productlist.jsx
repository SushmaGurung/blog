import React from 'react';
import "./productlist.css";
import Product from "../product/Product";
import { products } from '../../data';

const Productlist = () => {
  return (
    <div className='productlist'>
        <div className="productlist-text">
            <h1 className="productlist-title">
                Create & Inspire. It's Me!
            </h1>
            <p className="productlist-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium facilis reprehenderit, eaque delectus eius sint!</p>
        </div>
        <div className="pl-list">
          {products.map((product)=>{
            return <Product key={product.id} img={product.img} link={product.link}/>
          })}
            
        </div>
      
    </div>
  )
}

export default Productlist

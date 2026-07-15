import { useState } from 'react';
import './PartCard.css';
import stockImg from '../assets/stock_img.jpg';

export default function ProductCard({ showAddToCart = false }) {

    return (
        
        <div className="productCard">
            <img src={stockImg} alt={'stock product image'}/>
            <div className="productInfo">
                <p>description</p>
                <p>price</p>
                <p>weight</p>
                <p>qty available</p>
            </div>
            <div className="addToCart">
                <label>
                    <span className="quantityLabel">Quantity:</span>
                    <input type="number" className="qtyInput" min="1" defaultValue="1" />
                </label>
                { showAddToCart &&(
                    <button className="addButton">Add To Cart</button>
                    
                )}
            </div>
        </div>


    );
}

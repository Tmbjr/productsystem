import { useState } from 'react';
import './PartCard.css';
import stockImg from '../assets/stock_img.jpg';

export default function PartCard({ showAddToCart = false, quantity = 1, onQuantityChange}) {

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
                    <span className="quantityLabel">Qty:</span>
                    <input 
                        type="number"
                        className="qtyInput" 
                        min="1" 
                        value={quantity}
                        onChange={(e) => onQuantityChange && onQuantityChange(Number(e.target.value))}
                    />
                </label>
                { showAddToCart && (
                    <button className="addButton">Add To Cart</button>
                )}
            </div>
        </div>


    );
}

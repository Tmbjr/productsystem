import { useState } from 'react';
import './PartCard.css';
import stockImg from '../assets/stock_img.jpg';

export default function ProductCard() {

    return (
        
        <div className="productCard">
            <img src={stockImg} alt={'stock product image'}/>
        </div>
        

    );
}

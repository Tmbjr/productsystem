import './Catalog.css';
import PartCard from '../../components/PartCard';
import { useState } from 'react';



function cartButton() {
    
    function handleClick() {

    }
    

}

export default function Catalog() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div>
            <header className="header">
                <h1>Auto Parts Catalog</h1>
                <button>Product List</button>
                <button onClick = {() => setIsCartOpen(true)}>Cart</button>
                <div className="searchBar">
                    <input type="text" placeholder="query"/>
                    <h6>Search Parts by Description</h6>
                </div>
            </header>

            {isCartOpen && (
                <div className="cartOverlay">
                    <div className="cartHeader">
                        <h1>My Cart</h1>
                        <button onClick={() => setIsCartOpen(false)}>Close</button>
                    </div>
                    <div className="cartItems">
                        <div className="cartRow">
                            <PartCard />
                            <button className="removeButton" onClick={() => {}}>Remove</button>
                        </div>
                        <div className="cartRow">
                            <PartCard />
                            <button className="removeButton" onClick={() => {}}>Remove</button>
                        </div>
                        <div className="cartRow">
                            <PartCard />
                            <button className="removeButton" onClick={() => {}}>Remove</button>
                        </div>
                        <div className="cartRow">
                            <PartCard />
                            <button className="removeButton" onClick={() => {}}>Remove</button>
                        </div>
                    </div>
                    <div className="cartFooter">
                        <p>Total: $XX.XX</p>
                    </div>
                </div>
            )}

            <main className="productList">
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
                <PartCard />
            </main>
        </div>
    );
}

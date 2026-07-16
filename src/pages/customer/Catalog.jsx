import './Catalog.css';
import PartCard from '../../components/PartCard';
import { useState } from 'react';

export default function Catalog() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quantities, setQuantities] = useState([1, 1, 1, 1]);

    function handleQuantityChange(idx, newQty) {
        const updated = [...quantities];
        updated[idx] = newQty;
        setQuantities(updated);
    }

    function handleAddItem() {
    
    }

    function handleRemoveItem(removeIndex) {
        setQuantities(quantities.filter((_, index) => index !== removeIndex));
    }


    const numItems = quantities.reduce((sum, qty) => sum + qty, 0);

    return (
        <div>
            <header className="catalogHeader">
                <h1>Auto Parts Catalog</h1>
                <button onClick = {() => setIsCartOpen(true)}>View Cart</button>
                <input type="text" className="searchInput" placeholder="Filter parts by description"/>
            </header>

            {isCartOpen && (
                <div className="cartOverlay">
                    <header className="cartHeader">
                        <h1>My Cart({numItems})</h1>
                        <button onClick={() => setIsCartOpen(false)}>Close</button>
                    </header>

                    <div className="cartItems">
                        {quantities.map((qty, index) => (
                            <div className="cartRow" key={index}>
                                <PartCard
                                    quantity={qty}
                                    onQuantityChange={(newQty) => handleQuantityChange(index, newQty)}
                                />
                                <button className="removeButton" onClick={() => handleRemoveItem(index)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <footer className="cartFooter">
                        <div className="orderSummary">
                            <h3>Order Details</h3>
                            <p>Subotal: $XX.XX</p>
                            <p>Weight: X.XX lbs</p>
                            <p>Shipping: $XX.XX</p>
                            <p>Total: $XX.XX</p>
                        </div>
                        <div className="billingInfo">
                            <h3>Billing Info</h3>
                            <label className="billFormRow">
                                <span className="billLabel">Name:</span>
                                <input type="text" placeholder="John Doe"/>
                            </label>
                            <label className="billFormRow">
                                <span className="billLabel">Email:</span>
                                <input type="text" placeholder="jdoe@gmail.com"/>
                            </label>
                            <label className="billFormRow">
                                <span className="billLabel">Address:</span>
                                <input type="text" placeholder="123 Main St."/>
                            </label>
                            <label className="billFormRow">
                                <span className="billLabel">CC:</span>
                                <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx"/>
                            </label>
                            <label className="billFormRow">
                                <span className="billLabel">Exp.:</span>
                                <input type="text" placeholder="mm/yy"/>
                            </label>
                        </div>
                        <button className="checkoutButton">Checkout</button>
                    </footer>
                </div>
            )}

            <main className="productList">
                <PartCard showAddToCart />
                <PartCard showAddToCart />
                <PartCard showAddToCart />
                <PartCard showAddToCart />
                <PartCard showAddToCart />
                <PartCard showAddToCart />
                <PartCard showAddToCart />
                <PartCard showAddToCart />
                <PartCard showAddToCart />
                <PartCard showAddToCart />
                <PartCard showAddToCart />
                <PartCard showAddToCart />
            </main>
        </div>
    );
}

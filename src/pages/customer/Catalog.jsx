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
            <header className="catalogHeader">
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
                    <header className="cartHeader">
                        <h1>My Cart</h1>
                        <button onClick={() => setIsCartOpen(false)}>Close</button>
                    </header>
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

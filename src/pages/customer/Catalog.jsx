import './Catalog.css';
import PartCard from '../../components/PartCard';
import mockParts from '../../data/mockParts';
import { useState } from 'react';

export default function Catalog() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [partList, filterPartList] = useState(mockParts);

    //partInfo {partNumber: x, quantity: x}
    function handleAddItem(partInfo) {
        if (!cartItems.some(item => item.partNumber === partInfo.partNumber)) {
            const updatedCart = [...cartItems, partInfo];
            setCartItems(updatedCart);

        } else {
            const item = cartItems.find(i => i.partNumber === partInfo.partNumber);
            handleQuantityChange(partInfo.partNumber, partInfo.quantity + item.quantity)
        }
    }
    
    function handleQuantityChange(updatePartNo, newQty) {
        setCartItems(
            cartItems.map((item) =>
                item.partNumber === updatePartNo
                ? {...item, quantity: newQty}
                : item
            )
        );
    }    

    function handleRemoveItem(removePartNo) {
        setCartItems(cartItems.filter((element, index, cartItems) => element.partNumber !== removePartNo));
    }

    function filterParts(query) {
        filterPartList(mockParts.filter((element, index, mockParts) =>
            element.description.toLowerCase().startsWith(query.toLowerCase(), 0)
        ))
    }

    const numItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + (mockParts[item.partNumber - 1].price * item.quantity), 0);
    const totalWeight = cartItems.reduce((sum, item) => sum + (mockParts[item.partNumber - 1].weight * item.quantity), 0);

    return (
        <div>
            <header className="catalogHeader">
                <h1>Auto Parts Catalog</h1>
                <button onClick = {() => setIsCartOpen(true)}>View Cart ({numItems})</button>
                <input
                    type="text"
                    className="searchInput"
                    onChange={(e) => filterParts(e.target.value)}
                    placeholder="Filter parts by description"
                />
            </header>

            {isCartOpen && (
                <div className="cartOverlay">
                    <header className="cartHeader">
                        <h1>My Cart({numItems})</h1>
                        <button onClick={() => setIsCartOpen(false)}>Close</button>
                    </header>

                    <div className="cartItems">
                        {cartItems.map((item, index) => (
                            <div className="cartRow" key={item.partNumber}>
                                <PartCard
                                    quantity={item.quantity}
                                    onQuantityChange={(newQty) => handleQuantityChange(item.partNumber, newQty)}
                                    part={mockParts.find(p => p.partNumber === item.partNumber)}
                                />
                                <button
                                    className="removeButton"
                                    onClick={() => handleRemoveItem(item.partNumber)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <footer className="cartFooter">
                        <div className="orderSummary">
                            <h3>Order Details</h3>
                            <p>Subotal: ${subtotal.toFixed(2)}</p>
                            <p>Weight: {totalWeight.toFixed(2)} lbs</p>
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
                {partList.map((part) => (
                    <PartCard 
                        key={part.partNumber}
                        part={part} 
                        showAddToCart 
                        onAddToCart={(qty) => handleAddItem({partNumber: part.partNumber, quantity: qty})}
                    />
                ))}
            </main>
        </div>
    );
}

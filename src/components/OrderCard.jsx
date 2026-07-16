import './OrderCard.css'
export default function OrderCard({ onCompleteOrder }) {

    return (
        
        <div className="orderCard">
            <div className="orderInfo">
                <p>order id</p>
                <p>total price</p>
                <p>total weight</p>
            </div>
            <div className="completeOrder">
                <button className="completeButton" onClick={onCompleteOrder}>Complete Order</button>
                    
            </div>
        </div>


    );
}

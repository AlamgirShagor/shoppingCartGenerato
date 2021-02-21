import React from 'react';
import CartItem from '../CartItem/CartItem';
import CartItemHeader from '../CartItemHeader/CartItemHeader';

const Cart = () => {
    
    const cart = {
        marginTop: "50px",
        backgroundColor: "#F6F5FA",
        padding: "60px 20px"
    }
    
    const databaseName = "Shop";
    return (
        <div style={cart}>
            <div class="col-md-12 col-lg-10 mx-auto">
                <div className="row my-3">
                        <div className="col">
                            <h5>Database Name : {databaseName}</h5>
                        </div>
                </div>
                <div>
                    <CartItemHeader/>
                    <CartItem/>
                </div>
            </div>
        </div>
    );
};

export default Cart;
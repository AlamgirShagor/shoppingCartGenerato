import React from 'react';
import Form from '../Form/Form';

const CartGenerate = () => {
    const cart = {
        backgroundColor: "#F6F5FA",
        padding: "60px 20px"
    }
    const cartItem = {
        backgroundColor: "#fff",
	    borderRadius: "10px",
        padding: "15px 30px",
	    
    }
    return (
        <div style={cart}>
            <div style={cartItem}  class="col-md-12 col-lg-10 mx-auto">
                <Form/>
            </div>
        </div>
    );
};

export default CartGenerate;
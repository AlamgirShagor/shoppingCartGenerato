import React from 'react';
import Container from '@material-ui/core/Container';
import Cart from '../Cart/Cart';
import CartGenerate from '../CartGenerate/CartGenerate';

const CartMin = () => {
    return (
            <div style={{backgroundColor: "##F6F5FA"}}>
                <Container maxWidth="lg">
                   <Cart/>
                   <CartGenerate/>
                </Container>
            </div>
        );
};

export default CartMin;
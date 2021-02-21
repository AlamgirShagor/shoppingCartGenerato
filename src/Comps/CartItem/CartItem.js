import React from 'react';
const cartItemStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "30px 10px",
    
}
const CartItem = () => {
    
    const cartItem=[
        {
            itemName: "Book Accelerate",
            quantiry: '2',
            unitPrice: "20",
        },
        {
            itemName: "tshirt",
            quantiry: 2,
            unitPrice: 22,
            otherField : ""
        },
        {
            itemName: "tshirt",
            quantiry: 2,
            unitPrice: 22,
            otherField : ""
        },
        
    ]
    
    return (
        <div>
            {
                cartItem.map(cartItem => <div style={cartItemStyle} className="row   my-2">
                        <div className="col-6">
                            <h6>{cartItem.itemName}</h6>
                        </div>
                        <div className="col-2">
                            <h6>${cartItem.unitPrice}</h6>
                        </div>
                        <div className="col-2">
                            <h6>{cartItem.quantiry}</h6>
                        </div>
                        <div className="col-2">
                            <h6>{cartItem.quantiry * cartItem.unitPrice }</h6>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default CartItem;
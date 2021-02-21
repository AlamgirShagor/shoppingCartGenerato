import React from 'react';

const CartItemHeader = () => {
    const item =[
        {
            itemName: "PRDUCT",
            col: "col-6"
        },
        {
            itemName: "PRICE",
            col: "col-2"
        },
        {
            itemName: "QUANTITY",
            col: "col-2"
        },
        {
            itemName: "TOTAL",
            col: "col-2"
        },
    ]
    return (
        <div className="row">
            {
                item.map(item => <div className={item.col}><h6>{item.itemName}</h6></div>)
            }
        </div>
    );
};

export default CartItemHeader;
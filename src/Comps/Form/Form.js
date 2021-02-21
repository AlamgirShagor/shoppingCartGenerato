import React from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            <div className="col-md-6">
                <label htmlFor="">Database Name</label>
                <input className="form-control" type="text" name="DatabaseName" ref={register} />
            </div>
            <div className="col-md-6">
                <label htmlFor="">Password</label>
                <input className="form-control" type="password" name="Password" ref={register} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <label htmlFor="">Table Name</label>
                <input type="text" className="form-control" name="TableName" ref={register} />
            </div>
            <div className="col-md-6">
                <label htmlFor="">Pay Option</label>
                <select className="form-control" name="PayOption" ref={register}>
                    <option value="Stripe">Stripe</option>
                    <option value="other">other</option>
                </select>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-md-3">
                <label htmlFor="">Fleld Name For Shopping Cart</label>
            </div>
            <div className="col-md-9">
                <input type="text" className="form-control" name="FleldNameForShoppingCart" ref={register} />
            </div>
        </div>
        <input value="Generate Cart" className="btn" type="submit" />
        </form>
    );
};

export default Form;
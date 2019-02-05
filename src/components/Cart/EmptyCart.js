import React from 'react';
import Title from '../Title';
import CartColumn from './CartColumns';

export default function EmptyCart() {
    return (
        <div className="container-fluid mt-5">
           <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1> Your Cart is Currently empty </h1>
                </div>
            </div>     
        </div>
    )
}
import React from 'react';
import { BasketItem } from "./BasketItem";

export const Basket = ({ items, onIncrement, onDecrement, onRemove, totalValue }) => {
    return (
        <div>
            <h3>Basket</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Subtotal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(elm => (
                        <BasketItem
                            key={elm.id}
                            {...elm}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onRemove={onRemove}
                        />
                    ))}
                </tbody>
            </table>
            <h4>Total: {totalValue} USD</h4>
        </div>
    );
};
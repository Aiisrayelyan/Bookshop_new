import React from 'react';

export const BasketItem = ({ id, title, price, count, onIncrement, onDecrement, onRemove }) => {
    const subtotal = count * price;

    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{subtotal}</td>
            <td>
                <button onClick={() => onDecrement(id)}>-</button>
                <button onClick={() => onIncrement(id)}>+</button>
                <button onClick={() => onRemove(id)}>x</button>
            </td>
        </tr>
    );
};
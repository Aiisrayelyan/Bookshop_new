import React, { useState, useEffect } from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import { Basket } from './components/Basket';

function App() {
    const [basket, setBasket] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);    

    const moveToCart = id => {
        let found = products.find(x => x.id === id);
        if (found) {
            setBasket(prevBasket => {
                const existingItem = prevBasket.find(item => item.id === id);
                if (existingItem) {
                    return prevBasket.map(item =>
                        item.id === id ? { ...item, count: item.count + 1 } : item
                    );
                }
                return [...prevBasket, { ...found, count: 1 }];
            });
        }
    };

    const incrementCount = id => {
        setBasket(prevBasket =>
            prevBasket.map(item =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const decrementCount = id => {
        setBasket(prevBasket =>
            prevBasket.map(item =>
                item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item
            )
        );
    };

    const removeItem = id => {
        setBasket(prevBasket => prevBasket.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return basket.reduce((total, item) => total += item.price * item.count, 0);
    };

    const totalValue = calculateTotal();

    return (
        <>
            <div className="row">
                <ProductList items={products} onMove={moveToCart} />
                <Basket items={basket} onIncrement={incrementCount} onDecrement={decrementCount} onRemove={removeItem} totalValue={totalValue} />
            </div>
        </>
    );
}

export default App;
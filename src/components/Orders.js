import React, { useState, useEffect } from 'react';
import './Orders.css'; // CSS Module could be used here (Orders.module.css)

// Custom hook to fetch orders
const useOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 2000));

                const fetchedOrders = [
                    { id: 1, product: 'T-Shirt', quantity: 2, price: 29.99 },
                    { id: 2, product: 'Jeans', quantity: 1, price: 49.99 },
                    { id: 3, product: 'Sneakers', quantity: 1, price: 89.99 },
                ];

                setOrders(fetchedOrders);
            } catch (err) {
                setError('Failed to fetch orders.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return { orders, loading, error };
};

// LoadingIndicator component
const LoadingIndicator = () => (
    <div className="loading">
        <p>Loading your orders...</p>
    </div>
);

// ErrorDisplay component
const ErrorDisplay = ({ message }) => (
    <div className="error">
        <p>{message}</p>
    </div>
);

// OrderItem component
const OrderItem = ({ order }) => (
    <li className="order-item">
        <span className="order-product">{order.product}</span>
        <span className="order-quantity">Quantity: {order.quantity}</span>
        <span className="order-price">Rs {order.price.toFixed(2)}</span>
    </li>
);

// OrderList component
const OrderList = ({ orders }) => (
    <ul className="orders-list">
        {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
        ))}
    </ul>
);

// Main Orders component
const Orders = () => {
    const { orders, loading, error } = useOrders();

    return (
        <div className="orders-container">
            <h1 className="orders-heading">My Orders</h1>
            {loading && <LoadingIndicator />}
            {error && <ErrorDisplay message={error} />}
            {!loading && !error && <OrderList orders={orders} />}
        </div>
    );
};

export default Orders;

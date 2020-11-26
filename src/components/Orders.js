import React, {useEffect, useState} from 'react';
import currencyFormatter from "currency-formatter";
import {db} from "../config/firebase";
import "../scss/orders.scss"
import {useStateValue} from "../context/stateProvider";
import Order from "./Order";

function Orders() {
    const [{user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(item => ({
                        id: item.id,
                        data: item.data()
                    })))
                ));
        } else {
            setOrders([]);
        }
    }, [user]);


    return (
        <div className="orders">
            <h1 className="orders__header">
                Your Orders
            </h1>

            <div className="orders__list">
                {orders.length
                    ?
                    orders.map(order => (
                        <Order key={order.id} order={order}/>
                    ))
                    :
                    <p>No available orders yet</p>
                }
            </div>
        </div>
    );
}

export default Orders;
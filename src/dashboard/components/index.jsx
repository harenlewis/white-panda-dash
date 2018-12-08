import React, { Component } from 'react';
import dashboardData from '../../dashboardData'
import OrderDetail from './OrderDetail'
import '../css/index.css'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="order-container">
                {dashboardData.orders.map((order, index) => {
                    return (
                        <OrderDetail key={index} {...order} />
                    )
                })}
            </div>
        )
    }
}
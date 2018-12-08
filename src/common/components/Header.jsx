import React, { Component } from 'react';
import dashboardData from '../../dashboardData'
import '../css/header.css'


export default class Main extends Component {
    
    render() {
        const { headerIcons } = dashboardData
        return (
            <div className="header">
                <img alt="logo" src={require('../../full_logo_white.png')} />
                <div className="actions">
                    <div className="payment">
                        <i className={`demo-icon ${headerIcons.payment.icon}`} />
                    </div>
                    <div className="notification">
                        <i className={`demo-icon ${headerIcons.notification.icon}`} />
                    </div>
                    <div className="account">
                        <i className={`demo-icon ${headerIcons.account.icon}`} />
                    </div>
                    <div className="cart">
                        <i className={`demo-icon ${headerIcons.cart.icon}`} />
                    </div>
                </div>
            </div>
        )
    }
}
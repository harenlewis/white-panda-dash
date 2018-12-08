import React from 'react';
import '../css/order-detail.css' 


export default function OrderDetail({ wordRange, description, name, icon }) {
    const info = wordRange !== null ? `${wordRange} Words` : description

    return (
        <div className="order-detail">
            <div className="order-img-cont">
                <i className={`demo-icon ${icon}`} />
            </div>
            <span className="order-name">{name}</span>
            <span className="order-info">{info}</span>
            <button className="order-btn">Order</button>
        </div>
    );
  }
  
import React, { Component } from 'react';
import dashboardData from '../../dashboardData'
import '../css/sidebar.css'


export default class NavSideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: "Dashboard"
        }
    }

    render() {
        return (
            <div className="sidebar">
                {this.renderSideBar()}
            </div>
        )
    }

    selectItem = (val) => {
        this.setState({ active: val });
    }

    renderSideBar = () => {
        const { active } = this.state;

        return dashboardData.sideNavIcons.map((item, index) => {
            return (
                <div key={index} className={`item ${active === item.name ? 'active' : ''}`}>
                    <i
                        className={`demo-icon ${item.icon}`}
                        onClick={() => this.selectItem(item.name)}
                    />
                </div>
            )
        })
    }
    
}
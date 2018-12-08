import React, { Component } from 'react';
import Header from './Header'
import Dashboard from '../../dashboard/components/'
import NavSideBar from './NavSideBar'
import '../css/main.css'


export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="main-content">
                    <NavSideBar />
                    <Dashboard />
                </div>
            </div>
        )
    }
}
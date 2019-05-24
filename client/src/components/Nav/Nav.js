import React, { Component } from 'react';
import './Nav.scss'

export class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__logo">
                    <h2 className="nav__logo-letter">C</h2>
                </div>
                <h2>Company</h2>
            </div>
        )
    }
}

export default Nav

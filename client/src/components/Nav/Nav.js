import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Nav.scss'

export class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Link  className="nav__link" to='/'>
                <div className="nav__wrap">
                    <div className="nav__logo">
                        <h2 className="nav__logo-letter">C</h2>
                    </div>
                    <h2 className="nav__company">Company</h2>
                </div>
                </Link>
                <h3 className="nav__faq">FAQ</h3>
            </div>
        )
    }
}

export default Nav

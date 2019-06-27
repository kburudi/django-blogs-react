import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between bg-light ">
                    <ul className="navbar-nav pill-left">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Blogs</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav pull-right">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                </nav>
            </div>

        );
    }
}

export default Navbar;
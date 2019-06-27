import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <div className="mb-4">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between bg-light ">
                    <ul className="navbar-nav pill-left">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Blogs</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav pull-right">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        );
    }
}

export default Navbar;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

    render() {
        let pullRight = "";
        console.log(this.props.loggedIn)

        console.log(localStorage.token)

        if (this.props.loggedIn) {
            pullRight = <ul className="navbar-nav pull-right">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Logout</Link>
                </li>
            </ul>
        } else {
            pullRight = <ul className="navbar-nav pull-right">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
            </ul>
        }
        return (
            <div className="mb-4">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between bg-light ">
                    <ul className="navbar-nav pill-left">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Blogs</Link>
                        </li>
                    </ul>
                    {pullRight}
                </nav>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.logedUser.loggedIn,
})

export default connect(mapStateToProps, null)(Navbar);
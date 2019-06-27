import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Layout = (props) => (
    <div className="container">
        <Navbar />
        {props.children}
    </div>
)

export default Layout;
import React, { Component } from 'react';
import { BrowseRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../hoc/Layout';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Layout />
            </div>
        );
    }
}

export default App;
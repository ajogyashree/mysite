import React, { Component } from 'react';

import './css/App.css';
import { Sidebar } from './component/sidebar.component';
import {Router} from './router'
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'isDark': false,
            'issideOpen': false,
        }
    }

    darkMode = (value) => {
        this.setState({ 'isDark': value });
    }

    sideMode = (value) => {
        this.setState({ 'issideOpen': value });
    }


    render() {
        return (
            <main className={`app ${this.state.isDark ? `dark-mode` : ``} `}>
                <Sidebar toggleDark={this.darkMode} toggleSide={this.sideMode} />
                <Router/>
            </main>
        );
    }
}

export default App;

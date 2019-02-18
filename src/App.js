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
            'mainClass': ''
        }

    }

    darkMode = (value) => {
        this.setState({ 'isDark': value });
    }

    sideMode = (value) => {
        this.setState({ 'issideOpen': value });
    }

    toggleClass = (value) => {
        this.setState({ 'mainClass': value });
    }


    render() {
        return (
            <main className={`app ${this.state.isDark ? `dark-mode` : ``} ${this.state.mainClass} `}>
                <Sidebar toggleDark={this.darkMode} toggleSide={this.sideMode} />
                <Router addClasstomain={this.toggleClass} />
            </main>
        );
    }
}

export default App;

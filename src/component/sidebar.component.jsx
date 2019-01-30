import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'sideOpen': false,
            'darkMode': false
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.toggleDarkmode = this.toggleDarkmode.bind(this);

    }

    toggleSidebar = () => {
        if (this.state.sideOpen) {
            this.setState({ 'sideOpen': false });
            this.props.toggleSide(false);
        } else {
            this.setState({ 'sideOpen': true });
            this.props.toggleSide(true);
        }
    };
    
    toggleDarkmode = () => {
        if (this.state.darkMode) {
            this.setState({ 'darkMode': false });
            this.props.toggleDark(false);
        } else {
            this.setState({ 'darkMode': true });
            this.props.toggleDark(true);
        }
    };
   
    render() {
        return (
            <div className={`sidebar ${this.state.sideOpen ? `show-sidebar`:``}`}>
                <ul>
                    <li>
                        <Link to='/' onClick={this.toggleSidebar}>Me</Link>
                    </li>
                    <li>
                        <Link to='/story' onClick={this.toggleSidebar}>Story</Link>
                    </li>
                    <li>
                        <Link to='/timeline' onClick={this.toggleSidebar}>Timeline</Link>
                    </li>
                    <li>
                        <Link to='/photos' onClick={this.toggleSidebar}>Photos</Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={this.toggleSidebar}>About</Link>
                    </li>
                    <li className="toggle-darkmode">
                        <img onClick={this.toggleDarkmode} className={(this.state.darkMode) ? 'dark' : 'light'} src="../assets/day-and-night.jpg" alt="Toggle Dark Mode"/>
                    </li>
                    <li className="toggle-sidebar">
                        <button className="side-toggle" onClick={this.toggleSidebar}>
                            {(() => {
                                if (this.state.sideOpen) {
                                    return (
                                        <img src="../assets/close.png" alt="Close"/>
                                        )
                                } else {
                                    return (
                                        <img src="../assets/open.png" alt="Open"/>
                                    )
                                }
                            })()}
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}
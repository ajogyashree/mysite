import React, { Component } from "react";

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
                        <a href="http://">Me</a>
                    </li>
                    <li>
                        <a href="http://">Story</a>
                    </li>
                    <li>
                        <a href="http://">Photos</a>
                    </li>
                    <li>
                        <a href="http://">About</a>
                    </li>
                    <li>
                        <button onClick={this.toggleDarkmode}>{ (this.state.darkMode) ? 'Light Mode' : 'Dark Mode' }</button>
                    </li>
                    <li className="toggle">
                        <button className="side-toggle" onClick={this.toggleSidebar}>
                            {(() => {
                                if (this.state.sideOpen) {
                                    return (
                                        <img src="../assets/close.svg" alt="Close"/>
                                        )
                                } else {
                                    return (
                                        <img src="../assets/open.svg" alt="Open"/>
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
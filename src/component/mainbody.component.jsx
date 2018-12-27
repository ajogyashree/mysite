import React, { Component } from "react";

export class Mainbody extends Component {
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
            <div className="body">
                Hello World!!!
            </div>
        );
    }
}
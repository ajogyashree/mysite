import React, { Component } from "react";

export class Timeline extends Component {

    render() {
        return (
            <div className="body timeline">
                <div className="content">
                    <h3>Timeline</h3>
                    <div className="timeline-block">
                        <p className="year">2019 <span className="month">January</span></p>
                        <p className="desc">Released Visual Studio Code extension.</p>
                    </div>
                    <div className="timeline-block">
                        <p className="year">2017 <span className="month">November</span></p>
                        <p className="desc">Married</p>
                    </div>
                    <div className="timeline-block">
                        <p className="year">2016 <span className="month">July</span></p>
                        <p className="desc">Joined Jigsaw Academy Education Pvt. Ltd. as PHP Developer</p>
                    </div>
                    <div className="timeline-block">
                        <p className="year">2013 <span className="month">April</span></p>
                        <p className="desc">Joined Synapse India Pvt. Ltd. as Software Engineer</p>
                    </div>
                </div>
            </div >
        )
    }
};
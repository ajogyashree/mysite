import React, { Component } from "react";
import '../css/about.css';

export class About extends Component {
    
    componentDidMount() {
        this.props.addClasstomain('about');
    }

    componentWillUnmount() {
        this.props.addClasstomain('');
    }

    render() {
    
        return (

            <div className="body">
                <div className="content">
                    <h1>About</h1>
                    <h3>Skillset</h3>
                    <div>
                        <ul>
                            <li>
                                <p>
                                    <span className="logo-block"><img src="../../assets/html5.png" alt="HTML5" /></span>
                                    <span className="progress-bar"></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/css3.jpg" alt="CSS3" />
                                        <img src="../../assets/less.png" alt="LESS" />
                                        <img src="../../assets/sass.png" alt="SASS" />
                                    </span>
                                    <span className="progress-bar"></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/bootstrap.jpg" alt="Bootstrap" />
                                        <img src="../../assets/material.png" alt="Material" />
                                    </span>
                                    <span className="progress-bar"></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/js.png" alt="Javascript" />
                                        <img src="../../assets/jquery.png" alt="jQuery" />
                                    </span>
                                    <span className="progress-bar"></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/angular.png" alt="Angular" />
                                        <img src="../../assets/react.png" alt="React" />
                                    </span>
                                    <span className="progress-bar"></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/php.png" alt="PHP Core" />
                                        <img src="../../assets/laravel.png" alt="Laravel" />
                                        <img src="../../assets/cakephp.jpg" alt="CakePHP" />
                                    </span>
                                    <span className="progress-bar"></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/nodejs.png" alt="Nodejs" />
                                    </span>
                                    <span className="progress-bar"></span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <h3>Hobbies</h3>
                    <div>
                        <ol>
                            <li>Reading Manga</li>
                            <li>Reading Web novels</li>
                            <li>Reading random tech articles on Medium and Dev.to</li>
                            <li>Listening to Music</li>
                            <li>Photography (just starting)</li>
                            <li>Buying random domains hoping to get lucky someday.</li>
                        </ol>
                    </div>
                    <h3>Tools</h3>
                    <div>
                        <ol>
                            <li>Windows (HP) </li>
                            <li>Visual Studio Code </li>
                            <li>Zeplin</li>
                            <li>Redmi 4 + Mi Band 3</li>
                            <li>TVS Apache RTR 200 4v</li>
                        </ol>
                    </div>
                    <h3>Links</h3>
                    <div>
                        <ol>
                            <li><a href="https://www.google.com">Github</a></li>
                            <li><a href="https://www.google.com">Twitter</a></li>
                            <li><a href="https://www.google.com">Stackoverflow</a></li>
                            <li><a href="https://www.google.com">LinkedIn</a></li>
                            <li><a href="https://www.google.com" title="In case anyone cares. Does need login though.">Facebook</a></li>
                        </ol>
                    </div>
                </div>
            </div>

        )
    }
};

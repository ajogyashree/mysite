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
                <div className="content about-section">
                    <h3>Skillset</h3>
                    <div className="skillset">
                        <ul>
                            <li>
                                <p>
                                    <span className="logo-block"><img src="../../assets/html5.png" alt="HTML5" /></span>
                                    <span className="progress-bar"><span className="progress w-90"></span></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/css3.jpg" alt="CSS3" />
                                        <img src="../../assets/less.png" alt="LESS" />
                                        <img src="../../assets/sass.png" alt="SASS" />
                                    </span>
                                    <span className="progress-bar"><span className="progress w-70"></span></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/bootstrap.jpg" alt="Bootstrap" />
                                        <img src="../../assets/material.png" alt="Material" />
                                    </span>
                                    <span className="progress-bar"><span className="progress w-80"></span></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/js.png" alt="Javascript" />
                                        <img src="../../assets/jquery.png" alt="jQuery" />
                                    </span>
                                    <span className="progress-bar"><span className="progress w-60"></span></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/angular.png" alt="Angular" />
                                        <img src="../../assets/react.png" alt="React" />
                                    </span>
                                    <span className="progress-bar"><span className="progress w-50"></span></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/php.png" alt="PHP Core" />
                                        <img src="../../assets/laravel.png" alt="Laravel" />
                                        <img src="../../assets/cakephp.jpg" alt="CakePHP" />
                                    </span>
                                    <span className="progress-bar"><span className="progress w-70"></span></span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="logo-block">
                                        <img src="../../assets/nodejs.png" alt="Nodejs" />
                                    </span>
                                    <span className="progress-bar learn-mode"><span className="progress learn">Learning</span></span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <h3>Hobbies</h3>
                    <div className="other-details hobbies">
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
                    <div className="other-details tools">
                        <ol>
                            <li>Windows ( WSL with Ubuntu ) </li>
                            <li>Visual Studio Code </li>
                            <li>tmux</li>
                            <li>Zeplin</li>
                            <li>Redmi 4 + Mi Band 3</li>
                            <li>TVS Apache RTR 200 4v</li>
                        </ol>
                    </div>
                    <h3>Links</h3>
                    <div className="other-details links">
                        <ol>
                            <li>
                                <a href="https://github.com/ajogyashree" target="_blank" rel="noopener noreferrer">
                                    <img src="../../assets/github.png" alt="Github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/ajogya_shree" target="_blank" rel="noopener noreferrer">
                                    <img src="../../assets/twitter.png" alt="Twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://stackoverflow.com/users/3007408/sp0t" target="_blank" rel="noopener noreferrer">
                                    <img src="../../assets/stack-overflow.png" alt="Stackoverflow" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/j-sreepati-rao/" target="_blank" rel="noopener noreferrer">
                                    <img src="../../assets/linked-in.svg" alt="LinkedIn" />
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        )
    }
};

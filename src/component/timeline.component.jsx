import React, { Component } from "react";
import '../css/timeline.css';
export class Timeline extends Component {

    render() {
        return (
            <div className="body timeline">
                <div className="content">
                    <h3>Timeline</h3>
                    <div className="timeline-list">
                        <div className="timeline-block">
                            <p className="year">2019 <span className="month">January</span></p>
                            <p className="desc">Released <a href="https://marketplace.visualstudio.com/items?itemName=ajogyashree.mimeconvertor" target="_blank" rel="noopener noreferrer"> Visual Studio Code extension</a>.</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2018 <span className="month">August</span></p>
                            <p className="desc">Got Certified as Advanced SEO professional from <a href="https://bkbirla.in/" target="_blank" rel="noopener noreferrer">BKBirla</a>.</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2017 <span className="month">November</span></p>
                            <p className="desc">Married</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2017 <span className="month">April</span></p>
                            <p className="desc">Promoted to Full Stack Web Developer (UI) </p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2016 <span className="month">July</span></p>
                            <p className="desc">Joined <a href="https://www.jigsawacademy.com" target="_blank" rel="noopener noreferrer">Jigsaw Academy Education Pvt. Ltd.</a> as PHP Developer</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2016 <span className="month">March</span></p>
                            <p className="desc">Awarded as "Best Employee of the Month" again.</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2014 <span className="month">November</span></p>
                            <p className="desc">Started work as Lead Developer for <a href="https://www.foodcloud.in" target="_blank" rel="noopener noreferrer">FoodCloud.in</a> (Multivendor food delivery based ecommerce platform catering to users across Delhi NCR) </p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2014 <span className="month">October</span></p>
                            <p className="desc">Awarded as "Best Employee of the Month".</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2013 <span className="month">September</span></p>
                        <p className="desc">Joined <a href="https://www.synapseindia.com" target="_blank" rel="noopener noreferrer">Synapse India Pvt. Ltd.</a> as Software Engineer</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2012 <span className="month">December</span></p>
                            <p className="desc">Started working as a freelance web developer with friends with local SME as clients building portfolio websites..</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2012 <span className="month">Aug</span></p>
                            <p className="desc">Graduated as Bachelor of Technology (Computer Science &amp; Engineering) from <a href="http://driems.ac.in" target="_blank" rel="noopener noreferrer">DRIEMS</a>, Cuttack under Biju Patnaik University of Technology, Rourkela securing 7.1 CGPA.</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2008 <span className="month">May</span></p>
                            <p className="desc">Completed +2 from <a href="http://www.roland.ac.in/" target="_blank" rel="noopener noreferrer">Roland Junior College</a>, Berhampur under Council of Higher Secondary Education, Berhampur securing 67%.</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">2006 <span className="month">May</span></p>
                            <p className="desc">Completed 10th from <a href="http://mothers.edu.in/" target="_blank" rel="noopener noreferrer">Mother's Public School</a>, Bhubaneshwar under Central Board of Secondary Education, New Delhi securing 78%.</p>
                        </div>
                        <div className="timeline-block">
                            <p className="year">1989 <span className="month">September</span></p>
                            <p className="desc">Born @ Bhubaneshwar, Odisha</p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
};
import React from "react";
import { Spring } from "react-spring";

export const Home = () => (
    <div className="body">
        <div className="content">
            <img className="me" src="../../assets/me.jpg" alt="Me"/>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => <div className="hello" style={props}>@ajogyashree</div>}
            </Spring>
            <h3>jsr@this-site.me</h3>
            <p>Full Stack Web Developer / Freelancer</p>
        </div>
    </div>
);

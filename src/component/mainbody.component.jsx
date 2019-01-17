import React, { Component } from "react";
import { Spring } from "react-spring";

export class Mainbody extends Component {

    render() {
        return (
            <div className="body">
                <div className="content">
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}>
                        {props => <div className="hello" style={props}>hello</div>}
                    </Spring>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id accusamus consequatur aperiam voluptate expedita laboriosam in ut quidem, commodi, iusto, numquam eos recusandae nemo reiciendis distinctio dolore voluptas nisi.</h3>
                </div>
            </div>
        );
    }
}
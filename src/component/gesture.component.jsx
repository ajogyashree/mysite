import React from 'react'
import { useGesture, withGesture, Gesture } from 'react-with-gesture'
import { Spring, animated } from 'react-spring'
import '../gestures.css'

class GesturesExample extends React.Component {


    /* constructor(props) {
        super(props);

        this.action = this.action.bind(this);
    }

    config = {
        touch: true,                  // accept touch input
        mouse: true,                  // accept mouse input
        passive: { passive: true },   // event handler 3rd argument input, passive by default
        onAction: undefined           // event => eventHandler, respond to events outside Reacts render cycle
    };
    
    action = useGesture({ onAction: event => this.props.modeToggler, ...this.config }) */
    
    render() {
        const {
            delta: [xDelta],
            down,
        } = this.props
        const to = { x: down ? xDelta : 0 }
        return (
            <div className="gestures-main">
                <Spring native to={to} immediate={n => down && n === 'x'}>
                    {({ x }) => (
                        <animated.div
                            className="gestures-item"
                            style={{ backgroundColor: xDelta < 0 ? '#FF1C68' : '#14D790' }}>
                            <animated.div
                                className="gestures-bubble"
                                style={{
                                    transform: x
                                        .interpolate({
                                            map: Math.abs,
                                            range: [50, 300],
                                            output: [0.5, 1],
                                            extrapolate: 'clamp',
                                        })
                                        .interpolate(x => `scale(${x})`),
                                    justifySelf: xDelta < 0 ? 'end' : 'start',
                                }}
                            />
                            <animated.div
                                className="gestures-fg"
                                style={{
                                    transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
                                }}>
                                Mode
              </animated.div>
                        </animated.div>
                    )}
                </Spring>
            </div>
        )
    }
}
export default withGesture()(GesturesExample)
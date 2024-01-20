import React, { Component } from 'react'
import './RiskTolerance.scss';
import { Range, getTrackBackground } from 'react-range';
import ToleranceData from './toleranceData';
import transac from '../../Images/transac.jpg'

const STEP = 1;
const MIN = 0;
const MAX = 10;


export class RiskTolerance extends Component {
    state = {
        values: [6],
    };


    createScale = () => {
        let scale = [];

        for (let i = MIN; i <= MAX; i = i + STEP) {
            scale.push(
                <span key={i} className="scale_item">
                    {i}
                </span>
            );
        }

        return scale;
    };

    render() {
        // by default, this.state.value is an object, I had to convert it to a number
        console.log('data', typeof parseInt(this.state.values))
        return (
            <div className='riskToleranceContainer' id='riskTolerance'>
                <div className='rangeContainer'>
                    <div className='header'>
                        Risk Score: {this.state.values}
                    </div>

                    <Range
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        values={this.state.values}
                        onChange={(values) => this.setState({ values })}
                        renderTrack={({ props, children }) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: "16px",
                                    display: "flex",
                                    width: "100%"
                                }}
                            >
                                <div
                                    ref={props.ref}
                                    style={{
                                        height: "12px",
                                        width: "100%",
                                        borderRadius: "5px",
                                        background: getTrackBackground({
                                            values: this.state.values,
                                            colors: ["#28064e", "#bbb9b9"],
                                            min: MIN,
                                            max: MAX
                                        }),
                                        alignSelf: "center",
                                        boxShadow: "inset -1px -3px 0px 0px rgba(61, 24, 110, 0.747)"
                                    }}
                                >
                                    {children}
                                    {/* <div className="scale">{this.createScale()}</div> */}
                                </div>
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '25px',
                                    width: '25px',
                                    backgroundColor: '#101024',
                                    borderRadius: '50%',
                                }}
                            />
                        )}
                    />
                </div>
                <div className='WrapperContainer'>
                    <div className='firstWrapper'>
                        <ToleranceData indexNumber={parseInt(this.state.values)} />
                    </div>

                    <div className='secondWrapper'>
                        <div className='image'>
                            <img src={transac} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RiskTolerance
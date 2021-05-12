import './style/ScaleDisplayer.css'
import * as lib from '../lib/scaleslib.js'
import React from "react";

export default (props) => {
    const tone = props.tone;
    const scale = props.scale;
    const instrument = props.instrument;
    const tuning = props.tuning;
    const builtScale = props.builtScale;

    return (
        <div className="scaleDisplayer">
            <div className="scaleName">
                <h1>{builtScale[0]}</h1>
            </div>
            
            <div className="tones">
                <ul className="degree">
                    {builtScale[1].map((value, index) => <li key={index}>{value[1]}</li>)}
                </ul>
                <ul className="note">
                    {builtScale[1].map((value, index) => <li key={index}>{value[0]}</li>)}
                </ul>
            </div>
        </div>
    )
};

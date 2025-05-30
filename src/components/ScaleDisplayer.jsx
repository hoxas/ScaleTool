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
                <ul className="degreesAndNotes">
                    {builtScale[1].map((value, index) => <li key={index}><div className="degree">{value[1]}</div><div className="note">{lib.tones[value[0]]}</div></li>)}
                </ul>
            </div>
        </div>
    )
};

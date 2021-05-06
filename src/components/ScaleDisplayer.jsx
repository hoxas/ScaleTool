import './style/ScaleDisplayer.css'
import * as lib from '../lib/scaleslib.js'
import React from "react";

export default (props) => {
    const tone = props.tone;
    const scale = props.scale;
    const instrument = props.instrument;
    const tuning = props.tuning;

    // scaleMachine
    function buildScale (scale, tone) {
        // Init array and save first tone pos.
        let buildScale = [];
        let tone0 = tone;

        for (let i = 0; i < lib.scales[scale][1].length; i++) {
            tone %= 12;
            buildScale.push([lib.tones[tone], lib.scales[scale][2][i]])
            //console.log(tones[tone], tone)
            tone = tone + lib.scales[scale][1][i];
        }

        // scale output
        //console.log(`${tones[tone0]} ${scale[0]} Scale`)
        //console.table(buildScale)

        const builtScale = [`${lib.tones[tone0]} ${lib.scales[scale][0]} Scale`, buildScale]

        return builtScale;
    }

    let builtScale = buildScale(scale, tone)

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

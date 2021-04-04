import * as lib from '../lib/scaleslib.js'
import React from "react";

export default (props) => {
    const tone = props.tone;
    const scale = props.scale;
    const instrument = props.instrument;
    const tuning = props.tuning;

    function buildFretboard (scale, tone) {
        let builtFret = new Array();

        /* if (instrument == 0) {
            lib.tuning[1].map((value) => { 
                for (let i = 0; i <= 24; i) {

                }
            })
        } */
    }

    return (
        <div className="fretboard">
            <h1>fretboard here</h1>
        </div>
    )
};
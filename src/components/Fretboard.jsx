import * as lib from '../lib/scaleslib.js'
import React from "react";

export default (props) => {
    const tone = props.tone;
    const scale = props.scale;
    const instrument = props.instrument;
    const tuning = props.tuning;

    function buildFretboard () {
        let builtFret = new Array();
        let i;
        let instStrings =  lib.instruments[instrument][1];
        
        instStrings >= 6 ? i = 0 : i = -(instStrings - 6); 

        for (let strings = 0; strings < instStrings; strings++) {
            builtFret.push([]);
            let tone0 = lib.tuning[tuning][1][i];

            for (let fret = 0; fret < 25; fret++) {
                tone0 %= 12;
                builtFret[strings].push(tone0)
                tone0++;
            }
            i++;
        }
        

        return builtFret;
    }

    let builtFret = buildFretboard();
    console.log(builtFret)

    let fretCount = [...Array(25).keys()];

    return (
        <div className="fretboard">
            <table>
                <thead>
                    <tr>
                        {fretCount.map((value) => <td key={value}>{value}</td>)}
                    </tr>
                </thead>
                <tbody>
                    {builtFret.map((value, index) => (
                        <tr key={index}> 
                            {builtFret[index].map((value, index) => (
                                <td key={index}>{lib.tones[value]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
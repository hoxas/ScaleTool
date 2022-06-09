import "./style/Fretboard.css";
import * as lib from "../lib/scaleslib.js";
import React from "react";

export default (props) => {
    const tone = props.tone;
    const scale = props.scale;
    const instrument = props.instrument;
    const tuning = props.tuning;
    const lefty = props.lefty;
    const scaleNotes = props.scaleNotes;
    const chordBuild = props.chordBuild;
    const curChord = props.curChord;
    const curNote = props.curNote;
    const customInstrument = props.customInstrument;
    const customTuning = props.customTuning;

    let instFrets =
        instrument >= 0
            ? lib.instruments[instrument][2]
            : instrument === -1
            ? customInstrument[instrument + 1][2]
            : customInstrument[Math.abs(instrument + 1)][2];

    function buildFretboard() {
        let builtFret = [];
        let i;
        let instStrings =
            instrument >= 0
                ? lib.instruments[instrument][1]
                : instrument === -1
                ? customInstrument[instrument + 1][1]
                : customInstrument[Math.abs(instrument + 1)][1];

        instStrings >= 6 ? (i = 0) : (i = -(instStrings - 6));

        for (let strings = 0; strings < instStrings; strings++) {
            builtFret.push([]);
            let tone0 =
                tuning >= 0
                    ? lib.tuning[tuning][1][i]
                    : tuning === -1
                    ? customTuning[tuning + 1][1][i]
                    : customTuning[Math.abs(tuning + 1)][1][i];

            for (let fret = 0; fret < instFrets + 1; fret++) {
                tone0 %= 12;
                builtFret[strings].push(tone0);
                tone0++;
            }
            i++;
        }

        return builtFret;
    }

    let builtFret = buildFretboard();
    /* console.log(builtFret) */

    let fretCount = [...Array(instFrets + 1).keys()];

    /* console.log(fretCount) */

    /* function scaleNotes () {
        let scaleNotes = [];

        builtScale.map((value, index) => scaleNotes.push(builtScale[index][1]))

        return scaleNotes;
    } */

    return (
        <div className={`fretboard ${lefty ? "reverse" : ""}`}>
            <ul className="fretNumber">
                {fretCount.map((value) => (
                    <li key={value}>{value}</li>
                ))}
            </ul>
            <div className="strings">
                {builtFret.map((value, index) => (
                    <ul key={index} className={index}>
                        {builtFret[index].map((value, index) => (
                            <li key={index}>
                                <div
                                    className={
                                        chordBuild(curNote, curChord).includes(
                                            value
                                        )
                                            ? "selected"
                                            : scaleNotes.includes(value)
                                            ? "colored"
                                            : ""
                                    }
                                >
                                    {lib.tones[value]}
                                </div>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

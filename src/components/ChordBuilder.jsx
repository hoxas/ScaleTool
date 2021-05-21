import React from 'react';

import './style/ChordBuilder.css';

import * as lib from '../lib/scaleslib.js'

export default props => {

    const scaleNotes = props.scaleNotes;
    const chordBuild = props.chordBuild;
    const curChord = props.curChord;
    const setCurChord = props.setCurChord;
    const curNote = props.curNote;
    const setCurNote = props.setCurNote;

    function setNoteChord (note, chord) {
        setCurNote(note);
        setCurChord(chord);
    }

    return (
        <div className="chordbuilder">
            {scaleNotes.map((scalenote, index) => (
                <div key={index}>
                    <h2>{lib.tones[scalenote]}</h2>
                    {lib.chords.map((chordclass, index) => {
                        return (
                            <>
                                {/* <h4>{chordclass[0]}</h4> */}
                                <hr />
                                {lib.chords[index][1].map((chord, i) => (
                                    <button key={i}
                                    onClick={() => curNote === scalenote && curChord === lib.chords[index][1][i] ? setNoteChord('none', 0) : setNoteChord(scalenote, lib.chords[index][1][i])}
                                    className={curNote === scalenote && curChord === lib.chords[index][1][i] ? 'selected' : chordBuild(scalenote, chord).every(v => scaleNotes.includes(v)) ? 'colored' : ''}>
                                        {lib.tones[scalenote]}{chord[0]}
                                    </button>
                                ))}
                            </>
                        )
                    })}    
                </div>
            ))}
            {/* <h1>{scaleNotes}</h1> */}
        </div>
    )
}
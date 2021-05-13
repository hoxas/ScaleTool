import React from 'react';

import './style/ChordBuilder.css';

import * as lib from '../lib/scaleslib.js'

export default props => {

    const scaleNotes = props.scaleNotes;

    function chordBuild (root, chord) {
        let chordNotes = [root]
        chord[1].map((value) => {
            root += value
            chordNotes.push(root % 12)})
        /* console.log(chordNotes.map((value) => tones[value])) */
        return chordNotes
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
                                {lib.chords[index][1].map((chord, index) => (
                                    <button key={index} 
                                    className={chordBuild(scalenote, chord).every(v => scaleNotes.includes(v)) ? 'colored' : ''}>
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
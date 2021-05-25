import React from 'react'

import './style/Main.css'

import * as lib from '../lib/scaleslib.js'

import Header from './Header.jsx'
import ScaleDisplayer from './ScaleDisplayer.jsx'
import Fretboard from './Fretboard.jsx'
import ChordBuilder from './ChordBuilder.jsx'

export default props => {
    /* React.useState(parseInt(localStorage.getItem('tone')) || lib.tones[0]) */

    const [isDark, setDarkTheme] = React.useState(localStorage.getItem('theme') === 'true' || false);

    localStorage.setItem('theme', isDark);

    isDark ? document.body.id = 'darktheme' : document.body.id = ''

    const [tone, setTone] = React.useState(parseInt(localStorage.getItem('tone')) || 0);
    const [scale, setScale] = React.useState(parseInt(localStorage.getItem('scale')) || 0);
    const [instrument, setInstrument] = React.useState(parseInt(localStorage.getItem('instrument')) || 0);
    const [tuning, setTuning] = React.useState(parseInt(localStorage.getItem('tuning')) || 0);
    const [lefty, setLefty] = React.useState(localStorage.getItem('lefty') === 'true' || false);

    const [curNote, setCurNote] = React.useState('none');
    const [curChord, setCurChord] = React.useState(0);
    

    console.log(curNote, curChord)

    /* curChord === lib.chords[index][1][i] ? 0 :  */

    /* {console.log(curChord, lib.chords[index][1][i], curChord === lib.chords[index][1][i])} */

    localStorage.setItem('tone', tone);
    localStorage.setItem('scale', scale);
    localStorage.setItem('instrument', instrument);
    localStorage.setItem('tuning', tuning);
    localStorage.setItem('lefty', lefty);

    // scaleMachine
    function buildScale (scale, tone) {
        // Init array and save first tone pos.
        let buildScale = [];
        let tone0 = tone;

        for (let i = 0; i < lib.scales[scale][1].length; i++) {
            tone %= 12;
            buildScale.push([tone, lib.scales[scale][2][i]])
            //console.log(tones[tone], tone)
            tone = tone + lib.scales[scale][1][i];
        }

        // scale output
        //console.log(`${tones[tone0]} ${scale[0]} Scale`)
        //console.log(buildScale)

        const builtScale = [`${lib.tones[tone0]} ${lib.scales[scale][0]} Scale`, buildScale]

        return builtScale;
    }

    let builtScale = buildScale(scale, tone)

    /* console.log(builtScale) */

    // Make array only with notes in scale

    let scaleNotes = [];
    builtScale[1].map((value, index) => scaleNotes.push(builtScale[1][index][0]))

    /* console.log(scaleNotes) */

    function chordBuild (root, chord) {
        let chordNotes = [root]
        if (chord === 0) return chordNotes;
        chord[1].map((value) => {
            root += value
            chordNotes.push(root % 12)})
        /* console.log(chordNotes.map((value) => tones[value])) */
        return chordNotes
    }

    return (
        <div className="Main">
            <Header 
                tone={tone} 
                setTone={setTone} 
                scale={scale} 
                setScale={setScale} 
                instrument={instrument} 
                setInstrument={setInstrument} 
                tuning={tuning} 
                setTuning={setTuning}
                lefty={lefty}
                setLefty={setLefty}
                isDark={isDark}
                setDarkTheme={setDarkTheme} />
            <div className="content">
                <ScaleDisplayer 
                    tone={tone} 
                    scale={scale} 
                    instrument={instrument} 
                    tuning={tuning}
                    builtScale={builtScale} />
                <Fretboard 
                    tone={tone} 
                    scale={scale} 
                    instrument={instrument} 
                    tuning={tuning}
                    lefty={lefty}
                    scaleNotes={scaleNotes}
                    chordBuild={chordBuild}
                    curChord={curChord}
                    curNote={curNote} />
                <ChordBuilder
                    scaleNotes={scaleNotes}
                    chordBuild={chordBuild}
                    curChord={curChord}
                    setCurChord={setCurChord}
                    curNote={curNote}
                    setCurNote={setCurNote} />
            </div>
        </div>

    )
};
    
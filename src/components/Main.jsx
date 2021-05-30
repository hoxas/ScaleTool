import React from 'react'

import './style/Main.css'

import * as lib from '../lib/scaleslib.js'

import Header from './Header.jsx'
import ScaleDisplayer from './ScaleDisplayer.jsx'
import Fretboard from './Fretboard.jsx'
import ChordBuilder from './ChordBuilder.jsx'

import { CSSTransition } from 'react-transition-group'

import { GiConsoleController } from 'react-icons/gi'

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

    React.useEffect(() => {
        setCurNote('none');
        setCurChord(0);
    }, [tone, scale])

    function parseJSON (json) {
        try {
            return JSON.parse(localStorage.getItem(json));
        } catch (err) {
            return false;
        }
    }

    const [customScale, setCustomScale] = React.useState(parseJSON('customScale') || []);
    const [customInstrument, setCustomInstrument] = React.useState(parseJSON('customInstrument') || []);
    const [customTuning, setCustomTuning] = React.useState(parseJSON('customTuning') || []);

    const [customPrompt, setCustomPrompt] = React.useState(false);

    /* console.log(customPrompt) */

    /* console.log(customScale) */
    
    /* console.log(curNote, curChord) */

    /* curChord === lib.chords[index][1][i] ? 0 :  */

    /* {console.log(curChord, lib.chords[index][1][i], curChord === lib.chords[index][1][i])} */

    localStorage.setItem('tone', tone);
    localStorage.setItem('scale', scale);
    localStorage.setItem('instrument', instrument);
    localStorage.setItem('tuning', tuning);
    localStorage.setItem('lefty', lefty);
    localStorage.setItem('customScale', JSON.stringify(customScale));
    localStorage.setItem('customInstrument', JSON.stringify(customInstrument));
    localStorage.setItem('customTuning', JSON.stringify(customTuning));

    // scaleMachine
    function buildScale (scale, tone) {
        // Init array and save first tone pos.
        let buildScale = [];
        let tone0 = tone;

        if (scale >= 0) {
            for (let i = 0; i < lib.scales[scale][1].length; i++) {
                tone %= 12;
                buildScale.push([tone, lib.scales[scale][2][i]])
                tone += lib.scales[scale][1][i];   
            }

            const builtScale = [`${lib.tones[tone0]} ${lib.scales[scale][0]} Scale`, buildScale]
            return builtScale;

        } else {
            let cusScale = scale + 1;
            cusScale = cusScale < 0 ? Math.abs(cusScale) : cusScale;
            
            for (let i = 0; i < customScale[cusScale][1].length; i++) {
                tone %= 12;
                buildScale.push([tone, customScale[cusScale][2][i]])
                tone += parseInt(customScale[cusScale][1][i]);
            }

            console.log(buildScale)

            const builtScale = [`${lib.tones[tone0]} ${customScale[cusScale][0]} Scale`, buildScale]
            return builtScale;

        }

        // scale output
        //console.log(`${tones[tone0]} ${scale[0]} Scale`)
        //console.log(buildScale)        
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

    function Prompt (props) {
        let instStrings = instrument >= 0 ? lib.instruments[instrument][1] : instrument === -1 ?
        customInstrument[instrument + 1][1] : customInstrument[Math.abs(instrument + 1)][1];
        
        const [noStrings, setNoStrings] = React.useState(instStrings)
        /* const [scaleDisplay, setScaleDisplay] = React.useState([...Array(noStrings).keys()].map((value) => 1)) */
        const [scaleDeg, setScaleDeg] = React.useState(7)
        const [showStep, setShowStep] = React.useState(localStorage.getItem('showStep') === 'false' ? false : true)

        /* console.log(scaleDisplay) */

        localStorage.setItem('showStep', showStep)

        const customPrompt = props.customPrompt;

        if (customPrompt === 'scale') {
            let sname
            let sstep = []
            let sdegree = []

            function handleSubmit (e, sname, sstep, sdegree) {
                e.preventDefault();
                setCustomScale(customScale.concat([[
                    sname.value, 
                    sstep.map(item => item.value),
                    sdegree.map(item => item.value)
                ]]))
                setCustomPrompt(false);
            }

            let degreearray = [...Array(scaleDeg).keys()];

            function romanDeg (degree) {
                return (
                    (degree === 1 && 'I') || 
                    (degree === 2 && 'II') ||
                    (degree === 3 && 'III') || 
                    (degree === 4 && 'IV') || 
                    (degree === 5 && 'V') || 
                    (degree === 6 && 'VI') || 
                    (degree === 7 && 'VII') || 
                    (degree === 8 && 'VIII') || 
                    (degree === 9 && 'IX') || 
                    (degree === 10 && 'X') || 
                    (degree === 11 && 'XI') || 
                    (degree === 12 && 'XII')
                )
            }

            return (
                <>                           
                    <div className='head'>
                        <h1>Add Scale</h1>
                        <div className="control">
                            <button type="button" onClick={() => scaleDeg > 1 && setScaleDeg(scaleDeg - 1)}>-</button>
                            <button type="button" onClick={() => scaleDeg <= 11 && setScaleDeg(scaleDeg + 1)}>+</button>
                            <button type="button" onClick={() => setScaleDeg(7)}>Reset</button>
                            <button type="button" onClick={() => setShowStep(!showStep)}>{showStep ? 'Intervals' : 'Semitones'}</button>
                            <button onClick={() => setCustomPrompt(false)}>X</button>
                        </div>
                    </div>
                    <div className='prompt-content'>
                        <form onSubmit={(e) => handleSubmit(e, sname, sstep, sdegree)}>
                            <div className="inner">
                                <label for="sname">Scale Name:</label>
                                <input 
                                type="text" 
                                name="sname" 
                                placeholder="Scale Name" 
                                ref={input => sname = input} 
                                required />

                                

                                <h2>Scale Degrees:</h2>
                                {degreearray.map((degree) => (
                                    <div className="degree">
                                        <label for={degree + 1}>{degree + 1}</label>
                                        <select name={degree + 1} ref={input => sstep[degree] = input}>
                                            {lib.steps.map((value) => <option value={value[1]}>{showStep ? value[0] : value[1]}</option>)}
                                        </select>
                                        
                                        <input 
                                        type="text" 
                                        ref={input => sdegree[degree] = input} 
                                        defaultValue={romanDeg(degree + 1)} 
                                        required />
                                    </div>
                                ))}
                            </div>
                            <input type="submit" id="submit" value="Save Scale" />
                        </form>
                        
                    </div>
                </>
            )
        } else if (customPrompt === 'instrument') {
            let iname
            let istrings
            let ifrets

            function handleSubmit (e, iname, istrings, ifrets) {
                e.preventDefault();
                setCustomInstrument(customInstrument.concat([[
                    iname.value, 
                    parseInt(istrings.value),
                    parseInt(ifrets.value)
                ]]))
                setCustomPrompt(false);
            }

            return ( 
                <>                          
                    <div className='head'>
                        <h1>Add Instrument</h1>
                        <button onClick={() => setCustomPrompt(false)}>X</button>
                    </div>
                    <div className='prompt-content'>
                        <form onSubmit={(e) => handleSubmit(e, iname, istrings, ifrets)}>
                            <div className="inner">
                                <label for="iname">Instrument Name:</label>
                                <input 
                                type="text" 
                                name="iname" 
                                placeholder="Instrument Name" 
                                ref={input => iname = input} 
                                required />
                                
                                <label for="istrings">No. of Strings:</label>
                                <input 
                                type="number" 
                                name="istrings" 
                                placeholder="Number of Strings"
                                ref={input => istrings = input}
                                min="0" max="50" 
                                required />

                                <label for="ifrets">No. of Frets:</label>
                                <input 
                                type="number" 
                                name="ifrets" 
                                placeholder="Number of Frets"
                                ref={input => ifrets = input}
                                min="0" max="50" 
                                required />

                                <p>*To display all strings there needs to be a tuning set for every string.</p>
                            </div>

                            <input type="submit" id="submit" value="Save Instrument" />
                        </form>
                    </div>
                </>
            )
        } else if (customPrompt === 'tuning') {
            let tname
            let tstrings = [];

            function handleSubmit (e, tname, tstrings) {
                e.preventDefault();
                setCustomTuning(customTuning.concat([[
                    tname.value, 
                    tstrings.map(item => item.value)
                ]]))
                setCustomPrompt(false);
            }

            let stringsarray = [...Array(noStrings).keys()]

            return ( 
                <>
                    <div className='head'>
                        <h1>Add Tuning</h1>
                        <div className="control">
                            <button type="button" onClick={() => noStrings > 1 && setNoStrings(noStrings - 1)}>-</button>
                            <button type="button" onClick={() => noStrings <= 98 && setNoStrings(noStrings + 1)}>+</button>
                            <button type="button" onClick={() => setNoStrings(instStrings)}>Reset</button>
                            <button onClick={() => setCustomPrompt(false)}>X</button>
                        </div>
                    </div>
                    <div className='prompt-content'>
                        <form onSubmit={(e) => handleSubmit(e, tname, tstrings)}>
                            <div className="inner">
                                <label for="tname">Tuning Name:</label>
                                <input 
                                type="text"
                                name='tname'
                                placeholder="Name of Tuning"
                                ref={input => tname = input}
                                required />

                                <h2>Tunings:</h2>
                                <div className="tunings">
                                    {stringsarray.map((str) => (
                                        <div className={str + 1}>
                                            <label for={str + 1}>{str + 1}</label>
                                            <select name={str + 1} ref={input => tstrings[str] = input}>
                                                {lib.tones.map((value, index) => <option value={index}>{value}</option>)}
                                            </select>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <input type="submit" id="submit" value="Save Tuning" />
                        </form>
                    </div>
                </>
            )
        } else {
            return null
        }
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
                setDarkTheme={setDarkTheme}
                customScale={customScale}
                setCustomScale={setCustomScale}
                customInstrument={customInstrument}
                setCustomInstrument={setCustomInstrument}
                customTuning={customTuning}
                setCustomTuning={setCustomTuning}
                setCustomPrompt={setCustomPrompt} />
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
                    curNote={curNote}
                    customInstrument={customInstrument}
                    customTuning={customTuning} />
                <ChordBuilder
                    scaleNotes={scaleNotes}
                    chordBuild={chordBuild}
                    curChord={curChord}
                    setCurChord={setCurChord}
                    curNote={curNote}
                    setCurNote={setCurNote} />
                <CSSTransition
                in={customPrompt !== false}
                unmountOnExit
                timeout={500}
                classNames='prompt-transition'>
                    <div className='prompt'>
                        <Prompt customPrompt={customPrompt} />
                    </div>
                </CSSTransition>   
            </div>
        </div>

    )
};
    
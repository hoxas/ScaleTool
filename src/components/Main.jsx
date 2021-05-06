import React from 'react'

import './style/Main.css'

import Header from './Header.jsx'
import ScaleDisplayer from './ScaleDisplayer.jsx'
import Fretboard from './Fretboard.jsx'

export default props => {
    /* React.useState(parseInt(localStorage.getItem('tone')) || lib.tones[0]) */

    const [tone, setTone] = React.useState(parseInt(localStorage.getItem('tone')) || 0);
    const [scale, setScale] = React.useState(parseInt(localStorage.getItem('scale')) || 0);
    const [instrument, setInstrument] = React.useState(parseInt(localStorage.getItem('instrument')) || 0);
    const [tuning, setTuning] = React.useState(parseInt(localStorage.getItem('tuning')) || 0);
    const [lefty, setLefty] = React.useState(localStorage.getItem('lefty') === 'true' || false);

    localStorage.setItem('tone', tone);
    localStorage.setItem('scale', scale);
    localStorage.setItem('instrument', instrument);
    localStorage.setItem('tuning', tuning);
    localStorage.setItem('lefty', lefty);

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
                setLefty={setLefty} />
            <div className="content">
                <ScaleDisplayer 
                    tone={tone} 
                    scale={scale} 
                    instrument={instrument} 
                    tuning={tuning} />
                <Fretboard 
                    tone={tone} 
                    scale={scale} 
                    instrument={instrument} 
                    tuning={tuning}
                    lefty={lefty} />
            </div>
        </div>

    )
};
    
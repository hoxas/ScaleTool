import React from 'react'

import Header from './Header.jsx'
import ScaleDisplayer from './ScaleDisplayer.jsx'
import Fretboard from './Fretboard.jsx'

export default props => {
    /* React.useState(parseInt(localStorage.getItem('tone')) || lib.tones[0]) */

    const [tone, setTone] = React.useState(parseInt(localStorage.getItem('tone')) || 0);
    const [scale, setScale] = React.useState(parseInt(localStorage.getItem('scale')) || 0);
    const [instrument, setInstrument] = React.useState(0);
    const [tuning, setTuning] = React.useState(0);

    localStorage.setItem('tone', tone);
    localStorage.setItem('scale', scale);

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
                setTuning={setTuning} />
            <ScaleDisplayer 
                tone={tone} 
                scale={scale} 
                instrument={instrument} 
                tuning={tuning} />
            <Fretboard 
                tone={tone} 
                scale={scale} 
                instrument={instrument} 
                tuning={tuning} />
        </div>

    )
};
    
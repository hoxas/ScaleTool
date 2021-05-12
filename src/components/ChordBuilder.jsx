import React from 'react';

import './style/ChordBuilder.css';

import * as lib from '../lib/scaleslib.js'

export default props => {

    const scaleNotes = props.scaleNotes;

    return (
        <div className="chordbuilder">
            <h1>{scaleNotes}</h1>
        </div>
    )
}
import './style/Header.css'
import * as lib from '../lib/scaleslib.js';
import React from 'react';

export default (props) => {
    /* React.useState(parseInt(localStorage.getItem('tone')) || lib.tones[0]) */

    const tone = props.tone;
    const setTone = props.setTone;
    const scale = props.scale;
    const setScale = props.setScale;
    const instrument = props.instrument;
    const setInstrument = props.setInstrument;
    const tuning = props.tuning;
    const setTuning = props.setTuning;

    function Bttn (props) {
        /* button type tone */
        if (props.format == "tones") {
            let tone = parseInt(props.children);

            return (
                <button onClick={() => setTone(tone)}>{lib.tones[tone]}</button>
            )
        } else if (props.format == "scales") {
            let scale = parseInt(props.children);

            return (
                <button onClick={() => setScale(scale)}>{lib.scales[scale][0]}</button>
            )
        } else if (props.format == "instruments") {
            let instrument = parseInt(props.children);

            return (
                <button onClick={() => setInstrument(instrument)}>{lib.instruments[instrument][0]}</button>
            )
        } else if (props.format == "tuning") {
            let tuning = parseInt(props.children);

            return (
                <button onClick={() => setTuning(tuning)}>{lib.tuning[tuning][0]}</button>
            )
        }
    }
    
    function BuildBttn (props) {
        if (props.format == "tones") {
            return (
                <div className="drpdwn">
                    <button className="drpbtn">Tone: {lib.tones[tone]}</button>
                    <div className="drpcontent">
                        {lib.tones.map((value, index) => <Bttn key={index} format={props.format}>{index}</Bttn>)}
                    </div>
                </div>
            )
        } else if (props.format == "scales") {
            return (
                <div className="drpdwn">
                    <button className="drpbtn">Scale: {lib.scales[scale][0]}</button>
                    <div className="drpcontent">
                        {lib.scales.map((value, index) => <Bttn key={index} format={props.format}>{index}</Bttn>)}
                    </div>
                </div>
            )
        } else if (props.format == "instruments") {
            return (
                <div className="drpdwn">
                    <button className="drpbtn">Instrument: {lib.instruments[instrument][0]}</button>
                    <div className="drpcontent">
                        {lib.instruments.map((value, index) => <Bttn key={index} format={props.format}>{index}</Bttn>)}
                    </div>
                </div>
            )
        } else if (props.format == "tuning") {
            return (
                <div className="drpdwn">
                    <button className="drpbtn">Tuning: {lib.tuning[tuning][0]}</button>
                    <div className="drpcontent">
                        {lib.tuning.map((value, index) => <Bttn key={index} format={props.format}>{index}</Bttn>)}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="header">
            <div className="logo">Hello Logo</div>
            <BuildBttn format="tones"></BuildBttn>
            <BuildBttn format="scales"></BuildBttn>
            <BuildBttn format="instruments"></BuildBttn>
            <BuildBttn format="tuning"></BuildBttn>
        </div>
    );
};




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
        if (props.format == "tone") {
            let tone = parseInt(props.children);

            return (
                <button onClick={() => setTone(tone)}>{lib.tones[tone]}</button>
            )
        } else if (props.format == "scale") {
            let scale = parseInt(props.children);

            return (
                <button onClick={() => setScale(scale)}>{lib.scales[scale][0]}</button>
            )
        } else if (props.format == "instrument") {
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

    return (
        <div className="header">
            <div className="drpdwn">
                <button className="drpbtn">Tone: {lib.tones[props.tone]}</button>
                <div className="drpcontent">
                    <Bttn format="tone">0</Bttn>
                    <Bttn format="tone">1</Bttn>
                    <Bttn format="tone">2</Bttn>
                    <Bttn format="tone">3</Bttn>
                    <Bttn format="tone">4</Bttn>
                    <Bttn format="tone">5</Bttn>
                    <Bttn format="tone">6</Bttn>
                    <Bttn format="tone">7</Bttn>
                    <Bttn format="tone">8</Bttn>
                    <Bttn format="tone">9</Bttn>
                    <Bttn format="tone">10</Bttn>
                    <Bttn format="tone">11</Bttn>
                </div>
            </div>
            <div className="drpdwn">
                <button className="drpbtn">Scale: {lib.scales[props.scale][0]}</button>
                <div className="drpcontent">
                    <Bttn format="scale">0</Bttn>
                    <Bttn format="scale">1</Bttn>
                    <Bttn format="scale">2</Bttn>
                    <Bttn format="scale">3</Bttn>
                </div>
            </div>
            <div className="drpdwn">
                <button className="drpbtn">Instrument: {lib.instruments[props.instrument][0]}</button>
                <div className="drpcontent">
                    <Bttn format="instrument">0</Bttn>
                    <Bttn format="instrument">1</Bttn>
                </div>
            </div>
            <div className="drpdwn">
                <button className="drpbtn">Tuning: {lib.tuning[props.tuning][0]}</button>
                <div className="drpcontent">
                    <Bttn format="tuning">0</Bttn>
                </div>
            </div>
        </div>
    );
};



    /* function ConstBttn (props) {
        function build (index) { return <Bttn type={props.format}>{index}</Bttn>}            

        if (props.format == "tone")
        
        return lib.tones.forEach(build())    
    } */
import * as lib from '../lib/scaleslib.js';
import React from 'react';
import './style/Header.css';
import { FaGuitar, FaCog, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiMusicalScore } from 'react-icons/gi';
import { VscRepoForked } from 'react-icons/vsc';
import { BsMusicNoteBeamed, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg'

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
        if (props.format === "tones") {
            let tone = parseInt(props.children);

            return (
                <button onClick={() => setTone(tone)}>{lib.tones[tone]}</button>
            )
        } else if (props.format === "scales") {
            let scale = parseInt(props.children);

            return (
                <button onClick={() => setScale(scale)}>{lib.scales[scale][0]}</button>
            )
        } else if (props.format === "instruments") {
            let instrument = parseInt(props.children);

            return (
                <button onClick={() => setInstrument(instrument)}>{lib.instruments[instrument][0]}</button>
            )
        } else if (props.format === "tuning") {
            let tuning = parseInt(props.children);

            return (
                <button onClick={() => setTuning(tuning)}>{lib.tuning[tuning][0]}</button>
            )
        }
    }
    
    function BuildBttn (props) {
        if (props.format === "tones") {
            return (
                <div className="dropdown">
                    <button className="dropbtn"><span className="icon text">{lib.tones[tone]}</span><span className="title">Tone: {lib.tones[tone]}</span><span class="chevron"><BsChevronRight /></span></button>
                    <div className="dropcontent">
                        {lib.tones.map((value, index) => <Bttn key={index} format={props.format}>{index}</Bttn>)}
                    </div>
                </div>
            )
        } else if (props.format === "scales") {
            return (
                <div className="dropdown">
                    <button className="dropbtn"><span className="icon"><GiMusicalScore /></span><span className="title">Scale: {lib.scales[scale][0]}</span><span class="chevron"><BsChevronRight /></span></button>
                    <div className="dropcontent">
                        {lib.scales.map((value, index) => <Bttn key={index} format={props.format}>{index}</Bttn>)}
                    </div>
                </div>
            )
        } else if (props.format === "instruments") {
            return (
                <div className="dropdown">
                    <button className="dropbtn"><span className="icon"><FaGuitar /></span><span className="title">Instrument: {lib.instruments[instrument][0]}</span><span class="chevron"><BsChevronRight /></span></button>
                    <div className="dropcontent">
                        {lib.instruments.map((value, index) => <Bttn key={index} format={props.format}>{index}</Bttn>)}
                    </div>
                </div>
            )
        } else if (props.format === "tuning") {
            return (
                <div className="dropdown">
                    <button className="dropbtn"><span className="icon"><VscRepoForked /></span><span className="title">Tuning: {lib.tuning[tuning][0]}</span><span class="chevron"><BsChevronRight /></span></button>
                    <div className="dropcontent">
                        {lib.tuning.map((value, index) => <Bttn key={index} format={props.format}>{index}</Bttn>)}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="nav">
            <div className="logo"><span className="icon"><BsMusicNoteBeamed /></span><span className="title">ScaleTool</span></div>
            <div className="buttons">
                <BuildBttn format="tones"></BuildBttn>
                <BuildBttn format="scales"></BuildBttn>
                <BuildBttn format="instruments"></BuildBttn>
                <BuildBttn format="tuning"></BuildBttn>
                <div className="dropdown">
                    <button className="dropbtn">
                        <span className="icon"><FaCog /></span>
                        <span className="title">Settings</span>
                        <span class="chevron"><BsChevronRight /></span>
                    </button>
                    <div className="dropcontent">
                        {/* SETTINGS HERE */}
                    </div>
                </div>
            </div>
            <div className="contact">
                <button>
                    <span className="icon text">@</span>
                    <span class="title">
                        <a href="#"><CgWebsite /></a>
                        <a href="https://github.com/hoxas"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/allan-almeida-745a5015a/"><FaLinkedin /></a>
                    </span>
                </button>
            </div>
        </div>
    );
};




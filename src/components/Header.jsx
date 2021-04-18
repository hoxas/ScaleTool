import * as lib from '../lib/scaleslib.js';
import React from 'react';
import './style/Header.css';

import { FaGuitar, FaCog, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiMusicalScore } from 'react-icons/gi';
import { VscRepoForked } from 'react-icons/vsc';
import { BsMusicNoteBeamed, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

import { CSSTransition } from 'react-transition-group';

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

    const [activeMenu, setActiveMenu] = React.useState('main');

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
    
    function DropBtn (props) {

        if (props.format === "tones") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('tones')}>
                        <span className="icon text">{lib.tones[tone]}</span>
                        <span className="title">Tone: {lib.tones[tone]}</span>
                        <span class="chevron"><BsChevronRight /></span>
                    </button>
                </>
            )
        } else if (props.format === "scales") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('scales')}>
                        <span className="icon"><GiMusicalScore /></span>
                        <span className="title">Scale: {lib.scales[scale][0]}</span>
                        <span class="chevron"><BsChevronRight /></span>
                    </button>
                </>
            )
        } else if (props.format === "instruments") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('instruments')}>
                        <span className="icon"><FaGuitar /></span>
                        <span className="title">Instrument: {lib.instruments[instrument][0]}</span>
                        <span class="chevron"><BsChevronRight /></span>
                    </button>
                </>
            )
        } else if (props.format === "tuning") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('tuning')}>
                        <span className="icon"><VscRepoForked /></span>
                        <span className="title">Tuning: {lib.tuning[tuning][0]}</span>
                        <span class="chevron"><BsChevronRight /></span>
                    </button>
                </>
            )
        } else if (props.format === "settings") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => console.log('settings open')}>
                        <span className="icon"><FaCog /></span>
                        <span className="title">Settings</span>
                        <span className="chevron"><BsChevronRight /></span>
                    </button>
                </>
            )
        }
    }

    function BackBtn (props) {

        if (props.format === "tones") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('main')}>
                        <span className="icon text">{lib.tones[tone]}</span>
                        <span className="title">Tone: {lib.tones[tone]}</span>
                        <span class="chevron"><BsChevronLeft /></span>
                    </button>
                    {lib.tones.map((value, index) => <Bttn key={index} format={activeMenu}>{index}</Bttn>)}
                </>
            )
        } else if (props.format === "scales") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('main')}>
                        <span className="icon"><GiMusicalScore /></span>
                        <span className="title">Scale: {lib.scales[scale][0]}</span>
                        <span class="chevron"><BsChevronLeft /></span>
                    </button>
                    {lib.scales.map((value, index) => <Bttn key={index} format={activeMenu}>{index}</Bttn>)} 
                </>
            )
        } else if (props.format === "instruments") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('main')}>
                        <span className="icon"><FaGuitar /></span>
                        <span className="title">Instrument: {lib.instruments[instrument][0]}</span>
                        <span class="chevron"><BsChevronLeft /></span>
                    </button>
                    {lib.instruments.map((value, index) => <Bttn key={index} format={activeMenu}>{index}</Bttn>)} 
                </>
            )
        } else if (props.format === "tuning") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('main')}>
                        <span className="icon"><VscRepoForked /></span>
                        <span className="title">Tuning: {lib.tuning[tuning][0]}</span>
                        <span class="chevron"><BsChevronLeft /></span>
                        {lib.tuning.map((value, index) => <Bttn key={index} format={activeMenu}>{index}</Bttn>)} 
                    </button>
                </>
            )
        } else if (props.format === "settings") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('main')}>
                        <span className="icon"><FaCog /></span>
                        <span className="title">Settings</span>
                        <span className="chevron"><BsChevronLeft /></span>
                    </button>
                </>
            )
        }
    }

    return (
        <div className="nav">
            <div className="logo">
                <span className="icon">
                    <BsMusicNoteBeamed />
                </span>
                <span className="title">ScaleTool</span>
            </div>
            <div className="buttons">
                <CSSTransition 
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary">
                    <div className="menu">
                        <DropBtn format="tones"></DropBtn>
                        <DropBtn format="scales"></DropBtn>
                        <DropBtn format="instruments"></DropBtn>
                        <DropBtn format="tuning"></DropBtn>
                        <DropBtn format="settings"></DropBtn>             
                    </div>
                </CSSTransition>

                <CSSTransition 
                in={activeMenu === 'tones' || 
                    activeMenu === 'scales'|| 
                    activeMenu === 'instruments' || 
                    activeMenu === 'tuning' ||
                    activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                    <div className="menu">
                        <BackBtn format={activeMenu} />
                    </div>
                </CSSTransition>
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


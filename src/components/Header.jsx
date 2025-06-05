import * as lib from '../lib/scaleslib.js';
import React from 'react';
import './style/Header.css';

import { FaGuitar, FaCog, FaGithub, FaLinkedin, FaHandPaper, FaMoon, FaSun } from 'react-icons/fa';
import { GiMusicalScore } from 'react-icons/gi';
import { VscRepoForked } from 'react-icons/vsc';
import { BsMusicNoteBeamed, BsChevronLeft, BsChevronRight, BsFillTrashFill } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

import { CSSTransition } from 'react-transition-group';

export default (props) => {
    /* React.useState(parseInt(localStorage.getItem('tone')) || lib.tones[0]) */

    const H = 1;
    const W = 2;

    const tone = props.tone;
    const setTone = props.setTone;
    const scale = props.scale;
    const setScale = props.setScale;
    const instrument = props.instrument;
    const setInstrument = props.setInstrument;
    const tuning = props.tuning;
    const setTuning = props.setTuning;
    const lefty = props.lefty;
    const setLefty = props.setLefty;

    const isDark = props.isDark;
    const setDarkTheme = props.setDarkTheme;

    const customScale = props.customScale;
    const setCustomScale = props.setCustomScale;
    const customInstrument = props.customInstrument;
    const setCustomInstrument = props.setCustomInstrument;
    const customTuning = props.customTuning;
    const setCustomTuning = props.setCustomTuning;

    const setCustomPrompt = props.setCustomPrompt;

    const [activeMenu, setActiveMenu] = React.useState('main');

    function Bttn (props) {
        
        function removeBttn (e, custItem) {
            e.stopPropagation();

            if (activeMenu === 'scales') {
                (scale === custItem - 1 || -custItem - 1) && setScale(0);

                setCustomScale(customScale.length === 1 ? [] : customScale.filter((item, i) => i !== custItem))
                /* console.log(customScale) */
            } else if (activeMenu === 'instruments') {
                (instrument === custItem - 1 || -custItem - 1) && setInstrument(0);

                setCustomInstrument(customInstrument.length === 1 ? [] : customInstrument.filter((item, i) => i !== custItem))
            } else if (activeMenu === 'tuning') {
                (tuning === custItem - 1 || -custItem - 1) && setTuning(0);

                setCustomTuning(customTuning.length === 1 ? [] : customTuning.filter((item, i) => i !== custItem))
            }
            
        }

        if (props.format === "tones") {
            let tone = parseInt(props.children);

            return (
                <button 
                onClick={() => setTone(tone)}
                className="dropbtn">
                    <span className="icon text">{lib.tones[tone]}</span>
                    <span className="title">{lib.tones[tone]}</span>
                </button>
            )
        } else if (props.format === "scales") {

            let scale = parseInt(props.children);

            if (props.custom === true) {
                return (
                    <button 
                    onClick={() => scale === 0 ? setScale(scale - 1) : setScale(-scale - 1)}
                    className="dropbtn">
                        <span className="icon text">{customScale[scale][0][0]}</span>
                        <span className="title">{customScale[scale][0]}</span>
                        <span className="trash">
                            <button onClick={(e) => removeBttn(e, scale)}><BsFillTrashFill /></button>
                        </span>
                    </button>
                )
            } else {  
                return (
                    <button 
                    onClick={() => setScale(scale)}
                    className="dropbtn">
                        <span className="icon text">{lib.scales[scale][0][0]}</span>
                        <span className="title">{lib.scales[scale][0]}</span>
                    </button>
                )
            }
            
        } else if (props.format === "instruments") {
            let instrument = parseInt(props.children);

            if (props.custom === true) {
                return (
                    <button 
                    onClick={() => instrument === 0 ? setInstrument(instrument - 1) : setInstrument(-instrument - 1)}
                    className="dropbtn">
                        <span className="icon text">{customInstrument[instrument][0][0]}</span>
                        <span className="title">{customInstrument[instrument][0]}</span>
                        <span className="trash">
                            <button onClick={(e) => removeBttn(e, instrument)}><BsFillTrashFill /></button>
                        </span>
                    </button>
                )
            } else {
                return (
                    <button 
                    onClick={() => setInstrument(instrument)}
                    className="dropbtn">
                        <span className="icon text">{lib.instruments[instrument][0][0]}</span>
                        <span className="title">{lib.instruments[instrument][0]}</span>
                    </button>
                )
            }
        } else if (props.format === "tuning") {
            let tuning = parseInt(props.children);

            if (props.custom === true) {
                return (
                    <button 
                    onClick={() => tuning === 0 ? setTuning(tuning - 1) : setTuning(-tuning - 1)}
                    className="dropbtn">
                        <span className="icon text">{customTuning[tuning][0][0]}</span>
                        <span className="title">{customTuning[tuning][0]}</span>
                        <span className="trash">
                            <button onClick={(e) => removeBttn(e, tuning)}><BsFillTrashFill /></button>
                        </span>
                    </button>
                )
            } else {
                return (
                    <button 
                    onClick={() => setTuning(tuning)}
                    className="dropbtn">
                        <span className="icon text">{lib.tuning[tuning][0][0]}</span>
                        <span className="title">{lib.tuning[tuning][0]}</span>
                    </button>
                )
            }
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
                        <span className="chevron"><BsChevronRight /></span>
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
                        <span className="title">Scale: {scale >= 0 ? lib.scales[scale][0] : scale === -1 ? customScale[scale + 1][0] : customScale[Math.abs(scale + 1)][0]}</span>
                        <span className="chevron"><BsChevronRight /></span>
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
                        <span className="title">Instrument: {instrument >= 0 ? lib.instruments[instrument][0] : instrument === -1 ? customInstrument[instrument + 1][0] : customInstrument[Math.abs(instrument + 1)][0]}</span>
                        <span className="chevron"><BsChevronRight /></span>
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
                        <span className="title">Tuning: {tuning >= 0 ? lib.tuning[tuning][0] : tuning === -1 ? customTuning[tuning + 1][0] : customTuning[Math.abs(tuning + 1)][0]}</span>
                        <span className="chevron"><BsChevronRight /></span>
                    </button>
                </>
            )
        } else if (props.format === "settings") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('settings')}>
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
                        <span className="chevron"><BsChevronLeft /></span>
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
                        <span className="title">
                            Scale: {scale >= 0 ? lib.scales[scale][0] : scale === -1 ? customScale[scale + 1][0] : customScale[Math.abs(scale + 1)][0]}
                        </span>
                        <span className="chevron"><BsChevronLeft /></span>
                    </button>
                    {lib.scales.map((value, index) => <Bttn key={index} format={activeMenu}>{index}</Bttn>)}
                    {customScale.map((value, index) => <Bttn key={index} format={activeMenu} custom={true}>{index}</Bttn>)}
                    <button className="dropbtn" 
                    onClick={() => setCustomPrompt('scale')}>
                        <span className="icon text">+</span>
                        <span className="title">Add Scale</span>
                    </button> 
                </>
            )
        } else if (props.format === "instruments") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('main')}>
                        <span className="icon"><FaGuitar /></span>
                        <span className="title">
                            Instrument: {instrument >= 0 ? lib.instruments[instrument][0] : instrument === -1 ? customInstrument[instrument + 1][0] : customInstrument[Math.abs(instrument + 1)][0]}
                        </span>
                        <span className="chevron"><BsChevronLeft /></span>
                    </button>
                    {lib.instruments.map((value, index) => <Bttn key={index} format={activeMenu}>{index}</Bttn>)}
                    {customInstrument.map((value, index) => <Bttn key={index} format={activeMenu} custom={true}>{index}</Bttn>)}
                    <button className="dropbtn" 
                    onClick={() => setCustomPrompt('instrument')}>
                        <span className="icon text">+</span>
                        <span className="title">Add Instrument</span>
                    </button>  
                </>
            )
        } else if (props.format === "tuning") {
            return (
                <>
                    <button 
                    className="dropbtn" 
                    onClick={() => setActiveMenu('main')}>
                        <span className="icon"><VscRepoForked /></span>
                        <span className="title">
                            Tuning: {tuning >= 0 ? lib.tuning[tuning][0] : tuning === -1 ? customTuning[tuning + 1][0] : customTuning[Math.abs(tuning + 1)][0]}
                        </span>
                        <span className="chevron"><BsChevronLeft /></span> 
                    </button>
                    {lib.tuning.map((value, index) => <Bttn key={index} format={activeMenu}>{index}</Bttn>)}
                    {customTuning.map((value, index) => <Bttn key={index} format={activeMenu} custom={true}>{index}</Bttn>)}
                    <button className="dropbtn" 
                    onClick={() => setCustomPrompt('tuning')}>
                        <span className="icon text">+</span>
                        <span className="title">Add Tuning</span>
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
                    <button 
                    onClick={() => setDarkTheme(!isDark)}
                    className="dropbtn">
                        <span className="icon">{isDark ? <FaMoon /> : <FaSun />}</span>
                        <span className="title">Dark Theme: {isDark ? 'on' : 'off'}</span>
                    </button>
                    <button 
                    onClick={() => setLefty(!lefty)}
                    className="dropbtn">
                        <span className={`icon ${lefty ? 'reverse' : ''}`}><FaHandPaper /></span>
                        <span className="title">Left Handed: {lefty ? 'on' : 'off'}</span>
                    </button>
                </>
            )
        } else {
            /* WHAT THE FUCK OMG I NEED TO HEAR IT */
            return null
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
                        <div className="menuoptions">
                            <DropBtn format="tones" />
                            <DropBtn format="scales" />
                            <DropBtn format="instruments" />
                            <DropBtn format="tuning" />
                            <DropBtn format="settings" />
                        </div>  
                        <div className="contact">
                            <button>
                                <span className="icon text">@</span>
                                <span className="title">
                                    <a href="https://github.com/hoxas" target="_blank"><FaGithub /></a>
                                    <a href="https://www.linkedin.com/in/hoxas" target="_blank"><FaLinkedin /></a>
                                </span>
                            </button>
                        </div>           
                    </div>
                </CSSTransition>

                <CSSTransition 
                in={activeMenu !== 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                    <div className="menu">
                        <BackBtn format={activeMenu} />
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};


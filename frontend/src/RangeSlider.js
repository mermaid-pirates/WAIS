import { useState, useRef } from "react";
import './RangeBar.css';

function RangeSlider(props){
    let [gage, setGage] = useState(100);
    const bar = useRef();

    const upRange = ()=>{
        if(gage<200){
            bar.current.style.width = (gage-90) +"%";
            setGage(gage+10);
            props.e([...props.api, gage+10]);
        } else {
            bar.current.style.width = "100%";
        }
    };

    const downRange = ()=>{
        if(gage>100){
            bar.current.style.width = (gage-110) +"%";
            setGage(gage-10);
            props.e([...props.api, gage-10]);
        } else {
            bar.current.style.width = "0%";
        }
    }

    return (
        <div className="range-slider-box">
            <h3 className="label">{props.label}</h3>
            <div className="progress-bar-container">
                <button onClick={downRange}><span className="token"><img src="./minus.png" alt="글자축소"></img></span></button>
                <div className="progress-bar">
                    <div className="gage" ref={bar}></div>
                    <span className="g_percent">{gage}%</span>
                </div>
                <button onClick={upRange}><span className="token"><img src="./plus.png" alt="글자확대"></img></span></button>
            </div>
        </div>
    )
}

export default RangeSlider;
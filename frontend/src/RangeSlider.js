import { useState, useRef } from "react";
import './RangeBar.css';

function RangeSlider(props){
    let [gage, setGage] = useState(50);
    const bar = useRef();

    const upRange = (e)=>{
        if(gage<100){
            setGage(++gage);
            bar.current.style.width = gage+"%";
            props.e(e, props.func+"_up");
        } else {
            bar.current.style.width = "100%";
        }
    };

    const downRange = (e)=>{
        props.e(e);
        if(gage>0){
            setGage(--gage);
            bar.current.style.width = gage+"%";
            props.e(e, props.func+"_down");
        } else {
            bar.current.style.width = "0%";
        }
    }

    return (
        <div className="range-slider-box">
            <h3 className="label">{props.label}</h3>
            <div className="progress-bar-container">
                <button onClick={downRange}><span className="token">-</span></button>
                <div className="progress-bar">
                    <div className="gage" ref={bar}></div>
                    <span className="g_percent">{gage}%</span>
                </div>
                <button onClick={upRange}><span className="token">+</span></button>
            </div>
        </div>
    )
}

export default RangeSlider;
import { useState, useRef } from "react";
import '../../css/RangeBar.css';

function RangeSlider(props){
    let [range, setRange] = useState(50);
    const bar = useRef();

    const upRange = ()=>{
        if(range+25 <= 100){
            range = range+25;
            setRange(range);
        }
        bar.current.style.width = range+"%";
    };

    const downRange = ()=>{
        if(range-25 >= 0){
            range = range-25;
            setRange(range);
        }
        bar.current.style.width = range+"%";
    }

    return (
        <div className="range-slider-box">
            <h3 className="label">{props.label}</h3>
            <div className="progress-bar-container">
                <button onClick={downRange}><span className="token">-</span></button>
                <div className="progress-bar">
                    <div className="gage" ref={bar}>
                        <span className="g">{range}%</span>
                    </div>
                </div>
                <button onClick={upRange}><span className="token">+</span></button>
            </div>
        </div>
    )
}

export default RangeSlider;
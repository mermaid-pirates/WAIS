import { useRef } from 'react';
import './ToggleSwitch.css'

function ToggleSwitch(props){
    const btnRef = useRef();

    const toggle_e = (e)=>{
        if(btnRef.current.checked){
            const search = new URL(window.location).searchParams.get('search');
            console.log(search);
            props.e(props.api, search);
            props.select(props.radio_id);
        }
        
    }

    return (
        <div className="toggle-sw-box">
            <h3 className='label'>{props.label}</h3>
            <label className="switch">
                <label style={{"visibility": "hidden"}}>{props.label}</label>
                <input type="checkbox" onClick={toggle_e} ref={btnRef} checked={props.checked} readOnly/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch;
import './ToggleSwitch.css'

function ToggleSwitch(props){
    const toggle_e = ()=>{
        props.e(props.api);
    }

    return (
        <div className="toggle-sw-box">
            <h3 className='label'>{props.label}</h3>
            <label className="switch">
                <input type="checkbox" onClick={toggle_e}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch;
import './ToggleSwitch.css'

function ToggleSwitch(props){
    const toggle_e = (e)=>{
        props.e(e, props.api_id);
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
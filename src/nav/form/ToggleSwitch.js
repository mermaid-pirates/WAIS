import '../../css/ToggleSwitch.css'

function ToggleSwitch(props){

    return (
        <div className="toggle-sw-box">
            <h3 className='label'>{props.label}</h3>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch;
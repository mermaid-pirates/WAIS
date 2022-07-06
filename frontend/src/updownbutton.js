function UpDownBtn(props){
    return (
        <div className="font-size-controller">
            <label htmlFor='font-sizing'>{props.label}</label>
            <input type="range" min="0" max="100"></input>
        </div>
    )
}

export default UpDownBtn;
import ToggleSwitch from './ToggleSwitch';
// import RangeSlider from './RangeSlider';

function ToolBar(){
    const tools = [
        {label: "원본페이지보기"},
        {label: "글자확대"},
        {label: "글자축소"},
        {label: "색상대비"},
        {label: "명도대비"},
        {label: "깜박임제한"}
    ];

    const toolbar = tools.map((el, idx)=>{
        return <ToggleSwitch key={idx} label={el.label} />; 
    })


    return(
        <div className="tool-bar">
            {toolbar}
        </div>
    )
}

export default ToolBar;
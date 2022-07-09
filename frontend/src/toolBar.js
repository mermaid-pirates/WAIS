import ToggleSwitch from './ToggleSwitch';
import RangeSlider from './RangeSlider';

function ToolBar(props){
    const toggles_list = [
        {label: "원본페이지보기"},
        {label: "색상대비"},
        {label: "명도대비"},
        {label: "깜박임제한"}
    ];

    const ranges_list = [
        {label: "글자확대"},
        {label: "글자축소"}
    ]

    const toggles = toggles_list.map((el, idx)=>{
        return <ToggleSwitch key={idx} label={el.label} e={props.e}/>; 
    })

    const ranges = ranges_list.map((el, idx)=>{
        return <RangeSlider key={idx} label={el.label} e={props.e}/>; 
    })


    return(
        <div className="tool-bar">
            {toggles}
            {ranges}
        </div>
    )
}

export default ToolBar;
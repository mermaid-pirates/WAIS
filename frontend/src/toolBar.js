import ToggleSwitch from './ToggleSwitch';
import RangeSlider from './RangeSlider';

function ToolBar(props){
    const toggles_list = [
        {label: "원본페이지보기", api: null},
        {label: "색상대비", api: props.api_id.dark},
        {label: "명도대비", api: null},
        {label: "깜박임제한", api: null}
    ];

    const ranges_list = [
        {label: "글자크기", api: null},
    ]

    const toggles = toggles_list.map((el, idx)=>{
        return <ToggleSwitch key={idx} label={el.label} e={props.e} api_id={el.api}/>; 
    })

    const ranges = ranges_list.map((el, idx)=>{
        return <RangeSlider key={idx} label={el.label} e={props.e} api_id={el.api}/>;
    })


    return(
        <div className="tool-bar">
            {toggles}
            {ranges}
        </div>
    )
}

export default ToolBar;
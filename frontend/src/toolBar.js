import { boxSizing } from '@mui/system';
import { useRef } from 'react';
import RangeSlider from './RangeSlider';
import ToggleButtons from './ToggleButtons';


const overEvent = (e)=>{
    e.target.style.borderRadius = '8px';
    e.target.style.boxShadow = "0.5px 0.5px 10px 5px orange";
}

const outEvent = (e)=>{
    e.target.style.borderRadius = '';
    e.target.style.boxShadow = "";
}

function ToolBar(props){
    const btn_ref = useRef();
    const btn_box = useRef();

    const toggles_list = [
        {label: "원본모드", api: props.api.origin},
        {label: "다크모드", api: props.api.dark},
        {label: "색맹모드", api: props.api.color_weakness},
        {label: "고대비모드", api: props.api.high_contrast}
    ];

    const ranges_list = [
        {label: "글자크기", api: props.api.text_sizing},
    ]

    const ranges = ranges_list.map((el, idx)=>{
        return <RangeSlider 
            key={idx}
            label={el.label}
            e={props.e}
            api={el.api}
        />;
    })

    const transformBtn = (e)=> {
        if(btn_box.current.className === 'transform'){
            btn_box.current.className = '';
        } else {
            btn_box.current.className = 'transform';
        }
        
    }

    const focusTarget = (e) => {
        if(e.target.checked) {
            window.addEventListener("mouseover", overEvent)
            window.addEventListener("mouseout", outEvent)
        } else {
            window.removeEventListener("mouseover", overEvent);
            window.addEventListener("mouseout", outEvent);
        }
    }


    return(
        <div className="tool-bar">
            <div className='burger' ref={btn_ref} onClick={transformBtn}>
                <img src='./burger.png' alt='도움메뉴'></img>
            </div>
            <div id='burger-list' ref={btn_box}>

                <label className="toggle-focus-effect">
                    <label htmlFor="focus">마우스<br></br>포커싱</label>
                    <input id="focus" type="checkbox" onClick={focusTarget} />
                    <span className="slider round"></span>
                </label>
                <ToggleButtons e={props.e} list={toggles_list}></ToggleButtons>
                {ranges}
            </div>
            
        </div>
    )
}

export default ToolBar;
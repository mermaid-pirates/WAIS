import React from 'react';
import '../css/nav.css';
import ToggleSwitch from './form/ToggleSwitch';
import RangeSlider from './form/RangeSlider';

function Navbar(props){
    const toggle_s = <ToggleSwitch label="원본 페이지 보기"/>;
    const toggle_s2 = <ToggleSwitch label="깜박임 제한" />;
    const range_bar = <RangeSlider label="색상 대비"/>
    const range_bar2 = <RangeSlider label="명도 대비"/>

    return (
        <div className='nav-bar'>
            <div className='nav-bar-up nav-bar-h0'>
                <div className='box url-form'>
                    <form action="#" name="url" id="page_url">
                        <label className="url_form_label" htmlFor="page_url">URL : </label>
                        <input type="url" id="page_url" name="page_url"></input>
                        <input type="submit" value="Go"></input>
                        <input type="checkbox" id="cookie_check" name="cookie_check"></input>
                        <label className="cookie_label" htmlFor="cookie_check">쿠키 허용</label>  
                    </form>
                </div>
                <div className='box box-last font-size-controller'>
                    <label htmlFor='font-sizing'>글자 확대</label>
                    <input type="range" min="0" max="100"></input>
                </div>
            </div>
            <div className='nav-bar-down nav-bar-h0'>
                <div className='box original-paging'>
                    {toggle_s}
                </div>
                <div className='box blink-blocking'>
                    {toggle_s2}
                </div>
                <div className='box color-contrast'>
                    {range_bar}
                </div>
                <div className='box box-last brightness-contrast'>
                    {range_bar2}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
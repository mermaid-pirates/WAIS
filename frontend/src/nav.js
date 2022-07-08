import React from 'react';
import './nav.css';
import ToggleSwitch from './ToggleSwitch';
import RangeSlider from './RangeSlider';

function Navbar(props){
    const show_orign_page = <ToggleSwitch label="원본 페이지 보기" e={props.e} func="show_origin_page"/>;
    const restrict_blick = <ToggleSwitch label="깜박임 제한" e={props.e} func="restrict_blick"/>;
    const contrast_color = <RangeSlider label="색상 대비" e={props.e} func="contrast_color"/>
    const contrast_brightness = <RangeSlider label="명도 대비" e={props.e} func="contrast_brightness"/>
    const font_sizing = <RangeSlider label="글자 확대" e={props.e} func="font_sizing"/>

    return (
        <div className='nav-bar'>
            <div className='nav-bar-up nav-bar-h0'>
                <div className='box url-form'>
                    <form action="#" name="url" id="page_url">
                        <label className="url_form_label" htmlFor="page_url">URL : </label>
                        <input type="url" id="page_url" name="search"></input>
                        <input type="submit" value="Go"></input>
                        <input type="checkbox" id="cookie_check" name="cookie"></input>
                        <label className="cookie_label" htmlFor="cookie_check">쿠키 허용</label>  
                    </form>
                </div>
                <div className='box box-last'>
                    {font_sizing}
                </div>
            </div>
            <div className='nav-bar-down nav-bar-h0'>
                <div className='box original-paging'>
                    {show_orign_page}
                </div>
                <div className='box blink-blocking'>
                    {restrict_blick}
                </div>
                <div className='box color-contrast'>
                    {contrast_color}
                </div>
                <div className='box box-last brightness-contrast'>
                    {contrast_brightness}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
import { useEffect, useRef } from "react";
import getQueryStringObject from "./help/getQuery";


function RenderPage(props){
    const page_ref = useRef();

    window.addEventListener('load', ()=>{
        const query_url = getQueryStringObject(window.location.search).search;
        const xml = new XMLHttpRequest();
        xml.onreadystatechange = function(){
            if(this.status === 200 && this.readyState === this.DONE) {
                props.render(xml.responseText);
            }
        }
        xml.open('GET', `${props.server}?url=${query_url}`, true);
        xml.send();
    })

    useEffect(()=>{
        page_ref.current.innerHTML = props.body;
    })

    return (
        <div className="rendered-page" style={props.requestStyle}>
            <div id="body" ref={page_ref}></div>
        </div>
    );
}

export default RenderPage;
import { useEffect, useRef } from "react";

function getQueryStringObject() {
    var a = window.location.search.substr(1).split('&');
    if (a === "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length === 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

function RenderPage(props){
    const page_ref = useRef();

    useEffect(()=>{
        const query_url = getQueryStringObject(window.location.search).search;
        const xml = new XMLHttpRequest();
        xml.onreadystatechange = function(){
            if(this.status === 200 && this.readyState === this.DONE) {
                page_ref.current.innerHTML = xml.responseText;
            }
        }
        xml.open('GET', `${props.server}?url=${query_url}`, true);
        xml.send();
    });
    

    return (
        <div className="rendered-page" style={props.requestStyle}>
            <div id="body" ref={page_ref}></div>
        </div>
    );
}

export default RenderPage;
import { useEffect, useRef } from "react";
import getQueryStringObject from "./help/getQuery";
import * as mobilenet from '@tensorflow-models/mobilenet';


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
    let model;
    const ml = async (img) =>{
        model = await mobilenet.load();
        const predictions = await model.classify(img);
        console.log(predictions[0].className)
        return predictions[0].className;
    }
    useEffect(()=>{
        page_ref.current.innerHTML = props.body;
        const page= page_ref.current;
        const imgs = page.querySelectorAll('img');
        console.log(imgs)
        Array.from(imgs).forEach((element)=>{
            //console.log(element);
            if(!element.hasAttribute('alt')||element.alt === ""){
                element.setAttribute('crossorigin','anonymous');
                ml(element).then((alt) => {
                    element.alt = alt;
                })
            }
        })
    })

    return (
        <div className="rendered-page">
            <div id="body" ref={page_ref}></div>
        </div>
    );
}

export default RenderPage;
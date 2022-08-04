import { useEffect, useRef } from "react";
import getQueryStringObject from "./help/getQuery";
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

let model;
const ml = async (img) =>{
    model = await mobilenet.load();
    const predictions = await model.classify(img);
    // console.log(predictions[0].className)
    return predictions[0].className;
}


function RenderPage(props){
    const page_ref = useRef();

    useEffect(()=>{
        const query_url = getQueryStringObject(window.location.search).search;
        fetch(`${props.server}?url=${query_url}`)
            .then(res => {
                return res.text()
            })
            .then(html_text => {
                props.render(html_text)
            })
    }, [])
    
    useEffect(()=>{
        page_ref.current.innerHTML = props.body;

        const page= page_ref.current;
        const imgs = page.querySelectorAll('img');

        if(imgs.length !== 0){
            console.log(imgs);
            const promiseList = Array.from(imgs).map(async (element)=>{
                // console.log(element);
                if(!element.hasAttribute('alt')||element.alt === ""){
                    element.setAttribute('crossorigin','anonymous');
                    return ml(element).then((alt) => {
                        element.alt = alt;
                    })
                }
            });

            Promise.all(promiseList)
            .then(()=>{
                // console.log(page)
                props.render("<head></head>" + page.innerHTML);
            })

        }
    })

    return (
        <div className="rendered-page">
            <div id="body" ref={page_ref}></div>
        </div>
    );
}

export default RenderPage;
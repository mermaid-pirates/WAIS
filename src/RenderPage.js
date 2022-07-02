function RenderPage(props){
    const title = "iframe"
    const name = 'rendered page';
    const width = '100%';
    const height = '575px';

    return (
        <div className="rendered-page">
            <iframe
                src={props.src}
                title = {title}
                style={props.sheet} 
                name={name}
                width={width}
                height={height}
                sandbox="allow-scripts allow-popups">
            iframe을 지원하지 않는 브라우저는 사용할 수 없습니다.
            </iframe>
        </div>
    );
}

export default RenderPage;
export default function request_style(request, html, style){
    // style = [
    //     mode: 'color/text',
    //     detail: ''
    // ]
    const [mode, detail, text_size] = style;

    return fetch(`${request}style/${mode}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            html_data: html,
            style_change: detail,
            text_size: text_size
        })
    })

}
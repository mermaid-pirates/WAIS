export default function origin(request, html){
    return fetch(`${request}style/color`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            html_data: html,
            style_change: 'original'
        })
    })

}
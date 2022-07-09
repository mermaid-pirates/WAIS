export default function high_contrast(request, html){
    return fetch(`${request}style/color`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            html_data: html,
            style_change: 'high_contrast'
        })
    })

}
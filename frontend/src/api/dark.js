export default function dark(request, html){
    return fetch(`${request}style/color`, {
        method: 'POST',
        headers: {
            Accept: 'text/plain'
        },
        body: JSON.stringify({
            html_data: html,
            style_change: 'dark'
        })
    })

}
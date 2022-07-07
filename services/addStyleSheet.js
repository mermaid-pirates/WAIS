const setStyle = (html, style, style_name) => {
    html = html.slice(0, html.search('</head>')) +'<style class="wais '+style_name+'">'+style +'</style>'+ html.slice(html.search('</head>'));
    return html;
}

module.exports = { setStyle };
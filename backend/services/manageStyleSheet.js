const addStyle = (html, style, style_name) => {
    const head_end = html.search('</head>');
    return html.slice(0, head_end) 
            +'<style class="wais '+style_name+'">'+style +'</style>'
            + html.slice(head_end);
}

const delStyle = (html, style_category) => {
    const style_start = html.search('<style class="wais '+style_category+' ');
    const style_end = style_start + html.slice(style_start).search('</style>')+8;
    return html.slice(0, style_start) + html.slice(style_end);
}

module.exports = { addStyle, delStyle };
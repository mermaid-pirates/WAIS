const color_converter = require('./getColor');

const getStyle = () => {
    const style = [];
    style.push(`html, body {`);
    style.push(`    background-color: #ffffff;`);
    style.push(`    color: #000000;`);
    style.push('}');
    style.push('a {');
    style.push(`    color: #0072b1;`);
    style.push('}');
    style.push('table {');
    style.push(`    border-color: #808080;`);
    style.push('}');
    style.push('::placeholder {');
    style.push(`    color: #a9a9a9;`);
    style.push('}');
    style.push('input:-webkit-autofill,');
    style.push('textarea:-webkit-autofill,');
    style.push('select:-webkit-autofill {');
    style.push(`    background-color: #f0e542 !important;`);
    style.push(`    color: white !important;`);
    style.push('}');
    return style.join('\n');
}

const getRenderedHtml = (html_data) => {
    var pattern = /#[\da-f]{6}/gi;
    if(pattern.test(html_data)) {
        var target_list = [...new Set(html_data.match(pattern))];
        for(var target of target_list) {
            html_data = html_data.replace(new RegExp(target, 'gi'), color_converter.getColor(target));
        }
    }
    return html_data;
}

module.exports = { getStyle, getRenderedHtml };
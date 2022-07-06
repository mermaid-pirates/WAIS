const color_converter = require('./getColor');

const getStyle = (html_data) => {
    var pattern = /#[\da-f]{6}/gi;
    if(pattern.test(html_data)) {
        var target_list = [...new Set(html_data.match(pattern))];
        for(var target of target_list) {
            html_data = html_data.replace(new RegExp(target, 'gi'), color_converter.getColor(target));
        }
    }
    return html_data;
}

module.exports = { getStyle };
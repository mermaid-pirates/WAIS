const weak_color = require('./getWeakColor');
const strict_mode = false;
const setting = {};

const getRenderedHtml = (html_data) => {
    const pattern = /#[\da-f]{6}/gi;
    if(pattern.test(html_data)) {
        const target_list = [...new Set(html_data.match(pattern))];
        for(const target of target_list) {
            html_data = html_data.replace(new RegExp(target, 'gi'), weak_color.getColor(target));
        }
    }
    return html_data;
}

module.exports = { strict_mode, setting, getRenderedHtml };
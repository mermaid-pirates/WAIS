const common = require('../data/common');

const setStyle = (html) => {
    const head_start = html.search('<head>')+6;
    let result = html.slice(0, head_start);
    common.applied_style.forEach((value) => {
        result += value;
    });
    return result + html.slice(head_start);
}

const makeStyle = (style_name, in_selector = '', setting, strict_mode) => {
    const default_color         = setting.default_color         || 'black';
    const light_color           = setting.light_color           || 'grey';
    const link_color            = setting.link_color            || '#56b4e8';
    const default_background    = setting.default_background    || 'white';
    const light_background      = setting.light_background      || '#4d4d4d';
    const default_border        = setting.default_border        || 'grey';
    const default_placeholder   = setting.default_placeholder   || 'grey';
    const strict_setting = strict_mode ? `
        ${in_selector} * {
            background-color: ${default_background} !important;
            color: ${default_color};
            border-color: ${default_border} !important;
        }
        ${in_selector} a, ${in_selector} a * { color: ${link_color}; }
        ${in_selector} table { border-color: ${default_border} !important; }
        ${in_selector} body,    ${in_selector} input,   
        ${in_selector} textarea,${in_selector} keygen,  
        ${in_selector} select,  ${in_selector} button {
            color: ${default_color} !important;
        }
        ${in_selector} input,   ${in_selector} textarea,
        ${in_selector} select,  ${in_selector} input[type="hidden" i],
        ${in_selector} input[type="image" i],   ${in_selector} input[type="file" i],   
        ${in_selector} input[type="radio" i],   ${in_selector} input[type="checkbox" i] {
            background-color: ${light_background} !important;
        }`: ``;
    return `
    <style class="wais ${style_name}">
        ${strict_setting}
        ${in_selector} ::-webkit-input-placeholder {
            color: ${default_placeholder};
        }
        ${in_selector} input[type="button" i]:disabled, ${in_selector} input[type="submit" i]:disabled, 
        ${in_selector} input[type="reset" i]:disabled,  ${in_selector} input[type="file" i]:disabled::-webkit-file-upload-button, 
        ${in_selector} button:disabled, ${in_selector} select:disabled, 
        ${in_selector} keygen:disabled, ${in_selector} optgroup:disabled, 
        ${in_selector} option:disabled, ${in_selector} select[disabled]>option {
            color: ${light_color};
        }
        ${in_selector} select:-internal-list-box:disabled option:checked,
        ${in_selector} select:-internal-list-box option:checked:disabled {
            color: ${light_color} !important;
        }
        /* progress */
        ${in_selector} progress::-webkit-progress-value {
            background-color: #009f73;
        }
        /* color weakness */
        ${in_selector} meter::-webkit-meter-bar {
            background: linear-gradient(to bottom, #ddd, #eee 20%, #ccc 45%, #ccc 55%, #ddd);
        }
        ${in_selector} meter::-webkit-meter-optimum-value {
            background: linear-gradient(to bottom, #4dffcc, #99ffe2 20%, #00e6a4 45%, #00e6a4 55%, #4dffcc);
        }
        ${in_selector} meter::-webkit-meter-suboptimum-value {
            background: linear-gradient(to bottom, #f3ea72, #fbf8d0 20%, #ede02c 45%, #ede02c 55%, #f3ea72);
        }
        ${in_selector} meter::-webkit-meter-even-less-good-value {
            background: linear-gradient(to bottom, #dda2c3, #f1dae7 20%, #c86a9f 45%, #c86a9f 55%, #dda2c3);
        }
        /* inline elements */
        ${in_selector} mark { background-color: #f0e542; }
    </style>
    `;
}

module.exports = { setStyle, makeStyle };
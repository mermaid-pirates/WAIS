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

const makeStyle = () => {
    return `
/* tables */
table { border-color: gray }
thead { border-color: inherit }
tbody { border-color: inherit }
tfoot { border-color: inherit }
tr { border-color: inherit }
input, textarea, keygen, select, button {
    color: black;
}
input, textarea, select 
input[type="hidden" i], input[type="image" i], input[type="file" i],
input[type="radio" i], input[type="checkbox" i] {
    background-color: white;
}
::-webkit-input-placeholder {
    color: darkGray;
}
input[type="file" i] {
    color: inherit;
}
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: #f9f5b8 !important;
    color: #000000 !important;
}
input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
    color: ButtonText;
    background-color: ButtonFace;
}
input[type="range" i] {
    color: #909090;
}
input[type="button" i]:disabled, input[type="submit" i]:disabled, input[type="reset" i]:disabled,
input[type="file" i]:disabled::-webkit-file-upload-button, button:disabled,
select:disabled, keygen:disabled, optgroup:disabled, option:disabled,
select[disabled]>option {
    color: GrayText
}
input[type="color" i] {
    background-color: ButtonFace;
    /* Same as native_theme_base. */
    border: 1px #a9a9a9 solid;
}
input[type="color" i]::-webkit-color-swatch {
    background-color: #000000;
}
input[type="color" i][list]::-webkit-color-swatch {
    border-color: #000000;
}
input::-webkit-calendar-picker-indicator:hover {
    background-color: #eee;
}
select:-internal-list-box:focus option:checked {
    background-color: -internal-active-list-box-selection !important;
    color: -internal-active-list-box-selection-text !important;
}
select:-internal-list-box option:checked {
    background-color: -internal-inactive-list-box-selection !important;
    color: -internal-inactive-list-box-selection-text !important;
}
select:-internal-list-box:disabled option:checked,
select:-internal-list-box option:checked:disabled {
    color: gray !important;
}
meter::-webkit-meter-bar {
    background: linear-gradient(to bottom, #ddd, #eee 20%, #ccc 45%, #ccc 55%, #ddd);
}
meter::-webkit-meter-optimum-value {
    background: linear-gradient(to bottom, #ad7, #cea 20%, #7a3 45%, #7a3 55%, #ad7);
}
meter::-webkit-meter-suboptimum-value {
    background: linear-gradient(to bottom, #fe7, #ffc 20%, #db3 45%, #db3 55%, #fe7);
}
meter::-webkit-meter-even-less-good-value {
    background: linear-gradient(to bottom, #f77, #fcc 20%, #d44 45%, #d44 55%, #f77);
}
/* progress */
progress::-webkit-progress-bar {
    background-color: gray;
}
progress::-webkit-progress-value {
    background-color: green;
}
/* inline elements */
mark {
    background-color: yellow;
    color: black
}
/* states */
:focus { 
    outline: auto 5px -webkit-focus-ring-color
}
a:-webkit-any-link {
    color: -webkit-link;
}
a:-webkit-any-link:active {
    color: -webkit-activelink
}
/* HTML5 ruby elements */
frameset {
    border-color: inherit
}
dialog {
    background: white;
    color: black
}
dialog::backdrop {
    background: rgba(0,0,0,0.1)
}
    `;
}

module.exports = { addStyle, delStyle, makeStyle };
const getStyle = () => {
    const style = [];
    style.push(`#body html, body {`);
    style.push(`    background-color: #000000 !important;`);
    style.push(`    color: #ffffff !important;`);
    style.push('}');
    style.push(`#body * {`);
    style.push(`    background: #333333 !important;`);
    style.push(`    color: #ffffff !important;`);
    style.push(`    border-color: #cccccc;`);
    style.push('}');
    style.push('#body a {');
    style.push(`    color: #56b4e8 !important;`);
    style.push('}');
    style.push('#body ::placeholder {');
    style.push(`    color: #cccccc !important;`);
    style.push('}');
    style.push(`#body ::-moz-selection {`);
    style.push(`    color: #000000 !important;`);
    style.push(`    background: #ffffff !important;`);
    style.push(`}`);
    style.push(`#body ::selection {`);
    style.push(`    color: #000000 !important;`);
    style.push(`    background: #ffffff !important;`);
    style.push(`}`);
    return style.join('\n');
}

module.exports = { getStyle };

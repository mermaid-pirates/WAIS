const getStyle = () => {
    const style = [];
    style.push(`#body html, body {`);
    style.push(`    background-color: #000000 !important;`);
    style.push(`    color: #ffffff !important;`);
    style.push('}');
    style.push(`#body * {`);
    style.push(`    background: #000000 !important;`);
    style.push(`    color: #ffffff !important;`);
    style.push(`    border: solid #009f73 !important;`);
    style.push('}');
    style.push('#body a {');
    style.push(`    color: #f0e542 !important;`);
    style.push('}');
    style.push('#body table {');
    style.push(`    border-color: #f0e542 !important;`);
    style.push('}');
    style.push('#body ::placeholder {');
    style.push(`    color: #009f73 !important;`);
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
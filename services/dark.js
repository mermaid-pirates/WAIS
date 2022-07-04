module.exports = {
    getDarkModeStyle : function() {
        const style = [];
        style.push(`html, body {`);
        style.push(`    background-color: black;`);
        style.push('}');

        style.push(`html, body {`);
        style.push(`    border-color: #4c4c4c;`);
        style.push(`    color: white;`);
        style.push('}');
        style.push('a {');
        style.push(`    color: #b4c8ff;`);
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
        style.push(`    background-color: #faffbd !important;`);
        style.push(`    color: white !important;`);
        style.push('}');
        return style.join('\n');
    }
};
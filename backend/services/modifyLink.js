const CLIENT_URL = 'http://localhost:3000';
const SEARCH_URL = CLIENT_URL + '/searching?search=';

const modifyLink = (url, html) => {
    const context_path = url.match(/https:\/\/[^\/]*/)[0];
    const modified_relative_path = html.replace(/href="\//g, 'href="' + context_path + '/');
    const modified_absolute_path = modified_relative_path.replace(/href="http/g, `href="${SEARCH_URL}http`);
    return modified_absolute_path;
}

module.exports = modifyLink;

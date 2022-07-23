const CLIENT_URL = 'http://localhost:3000';
const SEARCH_URL = CLIENT_URL + '/searching?search=';

const modifyLink = (url, html) => {
    const context_path = getContextPath(url);

    const a_tag_regex = /<a [^>]*>?/g;
    let match_list = [...new Set(html.match(a_tag_regex))];
    let replaced_match_list = [...new Set(html.match(a_tag_regex))];
    replaced_match_list = getRelativePath(replaced_match_list, context_path);
    replaced_match_list = getAbsolutePath(replaced_match_list);

    return getReplacedHtml(html, match_list, replaced_match_list);
}

// input parameter: https://example.com/abc/def
// return: https://example.com
const getContextPath = (url) => {
    let match = url.match(/https?:\/\/[^\/]*/);
    if (match)
        return match[0];
    return null;
}

const getRelativePath = (match_list, context_path) => {
    return match_list.map(e => e.replace('href="/', 'href="' + context_path + "/"));
}

const getAbsolutePath = (match_list) => {
    return match_list.map(e => e.replace('href="http', 'href="' + SEARCH_URL + "http"))
}

const getReplacedHtml = (html, match_list, replaced_match_list) => {
    match_list.forEach((value, index) => {
        html = html.replace(value, replaced_match_list[index]);
    });
    return html;
}

module.exports = modifyLink;

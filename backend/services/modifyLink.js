const CLIENT_URL = 'http://localhost:3000';
const SEARCH_URL = CLIENT_URL + '/searching?search=';

const ignore_extension = [
    'png',
    'jpg',
    'jpeg',
    'css',
    'gif',
    'svg',
    'js',
    'ico',
];

const modifyLink = (url, html) => {
    const context_path = getContextPath(url);
    const modified_relative_html = getRelativePath(context_path, html);
    const modified_absolute_html = getAbsolutePath(modified_relative_html);

    return modified_absolute_html;
}

// input parameter: https://example.com/abc/def
// return: https://example.com
const getContextPath = (url) => {
    let match = url.match(/https:\/\/[^\/]*/);
    if (match)
        return match[0];
    
    match = url.match(/http:\/\/[^\/]*/);
    if (match)
        return match[0];
    
    return null;
}

const getRelativePath = (context_path, html) => {
    const relative_path_regex = /href="\/[a-z][^\\\\\:\|\<\>\"\*\?]*/gi; // 상대 경로 정규식
    let match_list = [...new Set(html.match(relative_path_regex))];
    if (!match_list) return html;
    match_list = match_list.map(e => e.replace('href="', ''));

    match_list = match_list.filter((url) => {
        const split_data = url.split('.');
        const extension = split_data[split_data.length-1];
        if (ignore_extension.indexOf(extension) == -1) {
            return true;
        }
    });
    
    let new_html = html;
    match_list.forEach((url) => {
        new_html = new_html.replace(url, context_path + url);
    });

    return new_html;
}

const getAbsolutePath = (html) => {
    const url_regex = /href="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi; // URL 정규식
    let match_list = [...new Set(html.match(url_regex))];
    if (!match_list) return html;
    match_list = match_list.map(e => e.replace('href="', ''));

    match_list = match_list.filter((url) => {
        if (url.indexOf(SEARCH_URL) > -1) return false;
        const split_data = url.split('.');
        const extension = split_data[split_data.length-1];
        if (ignore_extension.indexOf(extension) == -1) {
            return true;
        }
    });
    
    let new_html = html;
    match_list.forEach((url) => {
        new_html = new_html.replace(url, SEARCH_URL + url);
    });
    return new_html;
}

module.exports = modifyLink;

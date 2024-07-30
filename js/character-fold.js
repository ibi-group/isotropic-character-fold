import _diacriticsMap from 'diacritics-map';

const _replaceRegexp = new RegExp(`[\\p{Nonspacing_Mark}${
    Object.keys(_diacriticsMap).join('').replace(/[!#$%&\(\)*+,\-.\/:;<=>?@\[\\\]^`\{\|\}~]/gv, '\\$&')
}]`, 'gv');

export default string => string.normalize('NFKC').replace(_replaceRegexp, match => _diacriticsMap[match] || '');

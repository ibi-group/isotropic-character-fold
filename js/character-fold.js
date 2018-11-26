import _diacriticsMap from 'diacritics-map';

const _replaceRegexp = new RegExp(`[${Object.keys(_diacriticsMap).join('').replace(/[$()*+-./?[\\\]^{|}]/gu, '\\$&')}\u0300-\u036F]`, 'gu');

export default string => string.normalize('NFKC').replace(_replaceRegexp, match => _diacriticsMap[match] || '');

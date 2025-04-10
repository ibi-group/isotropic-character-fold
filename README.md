# isotropic-character-fold

[![npm version](https://img.shields.io/npm/v/isotropic-character-fold.svg)](https://www.npmjs.com/package/isotropic-character-fold)
[![License](https://img.shields.io/npm/l/isotropic-character-fold.svg)](https://github.com/ibi-group/isotropic-character-fold/blob/main/LICENSE)
![](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

A lightweight utility to normalize strings by replacing special characters with their basic ASCII equivalents.

## Why Use This?

- **Improved Search Functionality**: Users often search without special characters, diacritics, or accents
- **Simplified String Comparison**: Makes it easier to compare strings regardless of special characters
- **Normalized Sorting**: Ensures consistent alphabetical sorting by treating similar characters the same

## Installation

```bash
npm install isotropic-character-fold
```

## Usage

```javascript
import _characterFold from 'isotropic-character-fold';

// Replace accented characters
_characterFold('résumé'); // returns "resume"

// Replace special character variants
_characterFold('ŧęṧᵵṨⓣȑïȵɠ'); // returns "testString"

// Handle combining characters
_characterFold('n̂őŕm̃àłȋẑĕ'); // returns "normalize"
```

## How It Works

`isotropic-character-fold` uses JavaScript's native `String.normalize('NFKC')` method combined with the `diacritics-map` package to:

1. Normalize Unicode characters to their canonical form
2. Replace diacritics and special characters with basic ASCII equivalents
3. Remove remaining non-spacing marks

The module handles a wide range of special characters including:
- Accented characters (é, ü, ñ, etc.)
- Special character variants (ⓣ, ṧ, etc.)
- Combining characters (characters with multiple diacritical marks)

## API

### characterFold(string)

Returns a normalized version of the input string with special characters replaced by their basic ASCII equivalents.

#### Parameters

- `string` (String): The string to normalize

#### Returns

- (String): The normalized string

## Examples

### Basic Character Replacement

```javascript
import _characterFold from 'isotropic-character-fold';

// Accented characters
_characterFold('café'); // returns "cafe"
_characterFold('naïve'); // returns "naive"

// Special letter variants
_characterFold('ⓈⓊⓃⓈⓗⒾⓃⒺ'); // returns "SUNSHINE"
```

### Use in Search Implementation

```javascript
import _characterFold from 'isotropic-character-fold';

const _searchItems({
    items,
    query
}) => {
    const normalizedQuery = _characterFold(query).toLowerCase();

    return items.filter(item => {
        const normalizedItem = _characterFold(item).toLowerCase();

        return normalizedItem.includes(normalizedQuery);
    });
}

// Example usage
_searchItems({
    items: [
        'Café Americano',
        'Cafè Latte',
        'Café Mocha'
    ],
    query: 'cafe'
}); // Returns all items

_searchItems({
    items: [
        'résumé',
        'Resume',
        'RÉSUMÉ'
    ],
    query: 'resume'
}); // Returns all items
```

### Use in Sorting

```javascript
import _characterFold from 'isotropic-character-fold';

const _names = [
        'Zoë',
        'Ángel',
        'Adrian',
        'Bob'
    ],
    // Sort with character folding
    _sortedNames = _names.toSorted((a, b) => _characterFold(a).localeCompare(_characterFold(b)));

// _sortedNames: ['Adrian', 'Ángel', 'Bob', 'Zoë']
```

## Contributing

Please refer to [CONTRIBUTING.md](https://github.com/ibi-group/isotropic-character-fold/blob/main/CONTRIBUTING.md) for contribution guidelines.

## Issues

If you encounter any issues, please file them at https://github.com/ibi-group/isotropic-character-fold/issues

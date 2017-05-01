# tss

Strongly typed inline stylesheets for React.

## Usage

> npm install @mcrowe/tss --save

```js
import StyleSheet from '@mcrowe/tss'

const $ = StyleSheet({
  title: {
    fontSize: 12,
    color: '#ffaabb'
  },
  bold: {
    fontWeight: 700
  },
})

<div style={$('title', 'bold')} />
```

## Development

Install npm modules:

> npm install

Run tests:

> npm test

## Release

Release a new version:

> bin/release.sh

This will publish a new version to npm, as well as push a new tag up to github.

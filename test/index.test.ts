import assert = require('assert')
import StyleSheet from '../src'


test('Stylesheet', () => {

  const $ = StyleSheet({
    a: {
      color: '#aabbcc',
      fontSize: 12
    },
    b: {
      color: '#bbccdd',
      fontWeight: 300
    }
  })

  assert.deepEqual({
    color: '#aabbcc',
    fontSize: 12
  }, $('a'))

  assert.deepEqual({
    color: '#bbccdd',
    fontSize: 12,
    fontWeight: 300
  }, $('a', 'b'))

  assert.deepEqual({
    color: '#aabbcc',
    fontSize: 12
  }, $('a', false && 'b'))

  assert.deepEqual({
    color: '#bbccdd',
    fontWeight: 300
  }, $(undefined && 'a', 'b'))

  assert.throws(() => {
    $('c')
  }, /Missing style/)

  assert.deepEqual({}, $())

  assert.deepEqual({
    color: '#aabbcc',
    fontSize: 13
  }, $('a', {fontSize: 13}))

  assert.deepEqual({
    color: '#aabbcc',
    fontSize: 12
  }, $('a', undefined))

})
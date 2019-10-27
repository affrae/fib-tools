# @affrae/fib-tools



| LGTM | Code Quality |
|------|--------------|
|[![Total alerts](https://img.shields.io/lgtm/alerts/g/affrae/fib-tools.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/affrae/fib-tools/alerts/)|[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/affrae/fib-tools.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/affrae/fib-tools/context:javascript)

This module provides helper functions for the Fibonacci sequence.

### Get the nth Number

```javascript
const {getNumber} = require('@affrae/fib-tools')
assert.strictEqual(getNumber(8), 21)
```

### Get a List of Numbers

```javascript
const {getList} = require('@affrae/fib-tools')
assert.strictDeepEqual(getList(8), [0, 1, 1, 2, 3, 5, 8, 13, 21])
```

### Get a Sequence of Numbers

```javascript
const {getSequence} = require('@affrae/fib-tools')

const seq = getSequence()

for (const n of seq) {
  console.log(n) // The next Fibonacci number in the sequence
}
```

## Acknowledgements
This is openly and heavily borrowed from Jonathon Clem's `fib-tools project`, and he is listed as copyright opwner in the [MIT License](README.md). I used this to teach myself ~LGTM and QL~ GitHub Advanced Security, along with GitHub Actions

## License
The scripts and documentation in this project are released under the [MIT License](README.md)


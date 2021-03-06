# @affrae/fib-tools



[![Total alerts](https://img.shields.io/lgtm/alerts/g/affrae/fib-tools.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/affrae/fib-tools/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/affrae/fib-tools.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/affrae/fib-tools/context:javascript) ![](https://github.com/affrae/fib-tools/workflows/CI/badge.svg) ![Mark stale issues and pull requests](https://github.com/affrae/fib-tools/workflows/Mark%20stale%20issues%20and%20pull%20requests/badge.svg) 


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
This is openly and heavily borrowed from Jonathan Clem's `fib-tools project`, and he is listed as copyright owner in the [MIT License](LICENSE.md). I used this to teach myself ~LGTM and QL~ GitHub Advanced Security, along with GitHub Actions

## License
The scripts and documentation in this project are released under the [MIT License](LICENSE.md)


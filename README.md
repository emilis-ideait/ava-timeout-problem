# Ava test runner timeout problem demonstration

## Run with:

```
npm install
npm test
```

## Results:

```bash
$ npm test

> ava-timeout-problem@1.0.0 test
> ava


  ✔ a › test 1 should pass

  ✘ Timed out while running tests

  2 tests were pending in test-a.test.js

  ◌ a › test 2 should timeout
  ◌ a › test 3 should pass

  ✔ b › test 1 should pass

  ✘ Timed out while running tests

  2 tests were pending in test-b.test.js

  ◌ b › test 2 should timeout
  ◌ b › test 3 should pass

  ─

  2 tests passed
  4 tests remained pending after a timeout
```

## Expected results:


```bash
$ npm test

> ava-timeout-problem@1.0.0 test
> ava


  ✔ a › test 1 should pass
  ✘ [fail]: a › test 2 should timeout Test timeout exceeded
  ✔ a › test 3 should pass
  ✔ b › test 1 should pass
  ✘ [fail]: b › test 2 should timeout Test timeout exceeded
  ✔ b › test 3 should pass
  ─

  a › test 2 should timeout

  Error: Test timeout exceeded



  b › test 2 should timeout

  Error: Test timeout exceeded

  ─

  2 tests failed
```

## Workaround:

```
npm run workaround
```

See code in _workaround.test.js_.

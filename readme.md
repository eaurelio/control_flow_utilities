# Control Flow Utilities

Utilitários de Controle de Fluxo para Otimização de Funções JavaScript

### Currying Functions

A função `curry` transforma uma função com múltiplos argumentos em uma função que pode ser chamada como uma cadeia de funções.

```javascript
function multiply(a, b, c) {
  return a * b * c;
}

const _ = Symbol("_");
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // expected: 24
console.log(curriedMultiply(_, 3)(2)(4)); // expected: 24
console.log(curriedMultiply(2, _, _)(3)(4)); // expected: 24
console.log(curriedMultiply(_, _, 4)(2)(3)); // expected: 24
```

### Debounce Functions

A função `debounce` garante que uma função não seja chamada novamente até que um certo tempo tenha passado desde a última vez que foi chamada.

```javascript
function debouncedSearch(query) {
  console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);
```

### Throttle Functions

A função `throttle` garante que uma função não seja chamada mais do que uma vez em um determinado intervalo de tempo.

```javascript
function onScroll(event) {
  console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);
```

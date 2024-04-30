/**
 * A função aceleradora (throttle) que usa uma função e um intervalo de tempo como argumentos. A função de aceleração deve garantir que a função fornecida seja executada no máximo uma vez dentro do intervalo de tempo especificado.
 */

function throttle(func, interval) {
  let lastTime = 0;

  return function(...args) {
    const now = new Date().getTime();

    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

function onScroll(event) {
  console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);
// window.addEventListener("scroll", throttledScrollHandler);
// Você pode testar completamente a função usando o arquivo throtle_function.html
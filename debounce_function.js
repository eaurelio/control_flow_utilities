/**
 * A Função debounce recebe uma função e um tempo de atraso como argumentos.
 * O objetivo da função debounce é garantir que a função fornecida só seja executada depois que o usuário parar de invocá-la durante o tempo de atraso especificado.
 */

function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function debouncedSearch(query) {
  console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);

// const inputElement = document.getElementById("search-input");
// inputElement.addEventListener("input", (event) => {
//   debouncedSearchHandler(event.target.value);
// });
// Você pode testar completamente a função usando o arquivo debouce_function.html


// Creamos una accion para incrementar el contador

export const increment = () => {
  //Retornamos un objeto con el tipo de accion 'INCREMENT'
  return { type: "INCREMENT" };
};

//Creamos una accion para decrementar el contador
export const decrement = () => {
  //Retornamos un objeto con el tipo de accion 'DECREMENT'
  return { type: "DECREMENT" };
};

//Creamos una accion para reiniciar el contador

export const reset = () => {
  //Retornamos un objeto con el tipo de accion 'RESET'
  return { type: "RESET" };
};

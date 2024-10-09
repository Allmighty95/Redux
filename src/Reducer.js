// Este es el estado inicial de nuestro contador

const initialState = { count: 0 };

//Funcion reductora que maneja las acciones del contador

export const counterReducer = (state = initialState, action) => {
  //Evaluamos el tipo de accion que se envio
  switch (action.type) {
    case "INCREMENT":
      // Si la accion es 'INCREMENT', incrementamos el contador en 1
      return { count: state.count + 1 };

    case "DECREMENT":
      // Si la accion es 'DECREMENT', decrementamos el contador en 1
      return { count: state.count - 1 };

    case "RESET":
      //Si la funcion es 'RESET', reiniciamos el contador a 0
      return { count: 0 };

    default:
      //Si la accion no coincide con ninguna conocida, devolvemos el estador actual sin cambios
      return state;
  }
};

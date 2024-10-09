//Importamos React y los hooks de react-redux
import React from "react";
import { useSelector, useDispatch } from "react-redux";
//Importamos las acciones que hemos creado
import { increment, decrement, reset } from "./Actions";

const CounterComponent = () => {
  //useSelector selecciona el estado count del store de redux
  const count = useSelector((state) => state.count);
  //useDispatch nos permite enviar acciones al store de redux
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <button onClick={() => dispatch(reset())}>Restablecer</button>
    </div>
  );
};
export default CounterComponent;

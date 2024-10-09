//Importamos la funcion createStore de Redux para crear el store
import { createStore } from "redux";
// Importamos el reductor del contador que maneja las acciones
import { counterReducer } from "./Reducer";

//Creamos el store usando nuestro reductor
export const Store = createStore(counterReducer);

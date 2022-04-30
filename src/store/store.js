import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducers/todos";
import couterReducer from "../reducers/counter";
import usersReducer from "../reducers/users";
import albumsReducer from "../reducers/albums";

export const store = configureStore({
  reducer: {
    counter: couterReducer,
    todos: todosReducer,
    users: usersReducer,
    albums: albumsReducer,
  },
});

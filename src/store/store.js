import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducers/todos";
import usersReducer from "../reducers/users";
import albumsReducer from "../reducers/albums";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    users: usersReducer,
    albums: albumsReducer,
  },
});

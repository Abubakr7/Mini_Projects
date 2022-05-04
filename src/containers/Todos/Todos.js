import { Button, IconButton, TextField } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  handleChange,
} from "../../reducers/todos";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function Todos() {
  const text = useSelector(({ todos }) => todos.text);
  const todos = useSelector(({ todos }) => todos.todos);

  const dispatch = useDispatch();

  return (
    <div className="app">
      <TextField
        variant="standard"
        value={text}
        onChange={(e) => dispatch(handleChange(e.target.value))}
      />
      <Button
        variant="contained"
        color="success"
        style={{ margin: "0 10px" }}
        onClick={() => dispatch(addTodo())}
        startIcon={<AddIcon />}
      >
        add
      </Button>
      <div style={{ marginTop: 10 }}>
        {todos.map((elem, index) => {
          return (
            <div className="todo" key={index}>
              <input
                style={{ cursor: "pointer" }}
                type="checkbox"
                checked={elem.isCompleted}
                onChange={(e) =>
                  dispatch(completeTodo({ index, check: e.target.checked }))
                }
              />
              <div
                style={
                  elem.isCompleted ? { textDecoration: "line-through" } : {}
                }
              >
                {elem.text}
              </div>
              <div>
                <IconButton
                  color="error"
                  onClick={() => dispatch(deleteTodo(index))}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;

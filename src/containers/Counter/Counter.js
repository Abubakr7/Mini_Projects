import React from "react";
import {
  handleChange,
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../../reducers/counter";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, TextField, Typography } from "@mui/material";

function Counter() {
  const number = useSelector((state) => state.counter.value);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          color="success"
          component="span"
          onClick={() => dispatch(increment())}
        >
          <AddIcon />
        </IconButton>

        <Typography variant="h6" gutterBottom component="span">
          {count}
        </Typography>
        <IconButton
          color="error"
          component="span"
          onClick={() => dispatch(decrement())}
        >
          <RemoveIcon />
        </IconButton>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          color="success"
          variant="contained"
          style={{ margin: "0 10px" }}
          onClick={() => dispatch(incrementByAmount())}
          startIcon={<AddIcon />}
        >
          {number}
        </Button>

        <TextField
          style={{ margin: "0 10px" }}
          variant="standard"
          type="number"
          value={number}
          onChange={(e) => dispatch(handleChange(+e.target.value))}
        />

        <Button
          style={{ margin: "0 10px" }}
          color="error"
          variant="contained"
          onClick={() => dispatch(decrementByAmount())}
          startIcon={<RemoveIcon />}
        >
          {number}
        </Button>

        <Button
          style={{ margin: "0 10px" }}
          variant="contained"
          onClick={() => dispatch(reset())}
          startIcon={<RemoveIcon />}
        >
          reset
        </Button>
      </div>
    </div>
  );
}

export default Counter;

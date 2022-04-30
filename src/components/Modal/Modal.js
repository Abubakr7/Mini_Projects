import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Modal(props) {
  const { open, handleClose, title, action, send } = props;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          color={
            action === "add"
              ? "success"
              : action === "edit"
              ? "warning"
              : "error"
          }
          onClick={send}
          startIcon={
            action === "add" ? (
              <AddIcon />
            ) : action === "edit" ? (
              <EditIcon />
            ) : (
              <DeleteIcon />
            )
          }
          autoFocus
        >
          {action}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;

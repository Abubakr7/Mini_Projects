import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsers,
  deleteUsers,
  editUsers,
  getUsers,
  handleChange,
  handleModalOpenAndClose,
} from "../../reducers/users";
import Modal from "../../components/Modal/Modal";

function Users(props) {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.users);
  const user = useSelector(({ users }) => users.user);
  const addModal = useSelector(({ users }) => users.addModal);
  const editModal = useSelector(({ users }) => users.editModal);
  const deleteModal = useSelector(({ users }) => users.deleteModal);

  const onClose = (name) => {
    dispatch(handleModalOpenAndClose({ name: name, value: false }));
  };

  const onOpen = (name, id = null) => {
    dispatch(handleModalOpenAndClose({ name: name, value: true, id: id }));
  };

  const onSend = (name) => {
    if (name === "add") {
      dispatch(addUsers());
      return;
    }
    if (name === "edit") {
      dispatch(editUsers());
      return;
    }

    if (name === "delete") {
      dispatch(deleteUsers());
      return;
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    dispatch(handleChange({ name: name, value: value }));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <Button
        variant="contained"
        color="success"
        style={{ margin: "10px 10px" }}
        onClick={() => onOpen("addModal")}
        startIcon={<AddIcon />}
      >
        add
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>CreatedAt</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user?.id}
                </TableCell>
                <TableCell>{user?.createdAt?.slice(0, 10)}</TableCell>
                <TableCell>{user?.name}</TableCell>
                <TableCell>{user?.age}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.phone}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => onOpen("editModal", user?.id)}
                    color="warning"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => onOpen("deleteModal", user?.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={addModal}
        handleClose={() => onClose("addModal")}
        send={() => onSend("add")}
        title="Add User"
        action="add"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            name="name"
            label="Name"
            variant="standard"
            value={user.name}
            onChange={onChange}
          />

          <TextField
            name="email"
            label="Email"
            variant="standard"
            value={user.email}
            onChange={onChange}
          />
          <TextField
            name="age"
            label="Age"
            variant="standard"
            value={user.age}
            onChange={onChange}
          />
          <TextField
            name="phone"
            label="Phone"
            variant="standard"
            value={user.phone}
            onChange={onChange}
          />
        </div>
      </Modal>
      <Modal
        open={editModal}
        handleClose={() => onClose("editModal")}
        send={() => onSend("edit")}
        title="Edit User"
        action="edit"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            name="name"
            label="Name"
            variant="standard"
            value={user.name}
            onChange={onChange}
          />

          <TextField
            name="email"
            label="Email"
            variant="standard"
            value={user.email}
            onChange={onChange}
          />
          <TextField
            name="age"
            label="Age"
            variant="standard"
            value={user.age}
            onChange={onChange}
          />
          <TextField
            name="phone"
            label="Phone"
            variant="standard"
            value={user.phone}
            onChange={onChange}
          />
        </div>
      </Modal>
      <Modal
        open={deleteModal}
        handleClose={() => onClose("deleteModal")}
        send={() => onSend("delete")}
        title="Delete User"
        action="delete"
      >
        Are you sure you want to delete this user?
      </Modal>
    </div>
  );
}

export default Users;

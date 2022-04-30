import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://6264fc9e94374a2c506bde51.mockapi.io/users"
      );
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUsers = createAsyncThunk(
  "users/addUsers",
  async (_, { rejectWithValue, dispatch, getState }) => {
    const user = getState().users.user;
    try {
      const { data } = await axios.post(
        "https://6264fc9e94374a2c506bde51.mockapi.io/users",
        user
      );

      dispatch(getUsers());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editUsers = createAsyncThunk(
  "users/editUsers",
  async (_, { rejectWithValue, dispatch, getState }) => {
    const user = getState().users.user;
    const id = getState().users.id;
    try {
      const { data } = await axios.put(
        `https://6264fc9e94374a2c506bde51.mockapi.io/users/${id}`,
        user
      );

      dispatch(getUsers());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (_, { rejectWithValue, dispatch, getState }) => {
    const id = getState().users.id;

    try {
      const { data } = await axios.delete(
        `https://6264fc9e94374a2c506bde51.mockapi.io/users/${id}`
      );

      dispatch(getUsers());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setLoading = (state) => {
  state.loading = true;
};

const setError = (state, action) => {
  state.loading = false;
  state.status = action.payload.error;
};

const initialUser = {
  name: "",
  age: "",
  email: "",
  phone: "",
};
export const slice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: initialUser,
    id: null,
    addModal: false,
    editModal: false,
    deleteModal: false,
    loading: false,
    status: null,
  },
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;

      state.user[name] = value;
    },
    handleModalOpenAndClose: (state, action) => {
      const { name, value, id = null } = action.payload;
      state[name] = value;
      state.user = initialUser;
      if (id) {
        state.id = id;
        state.user = state.users.find((elem) => elem.id === id);
      }
    },
  },
  extraReducers: {
    [getUsers.pending]: setLoading,
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: setError,
    [addUsers.pending]: setLoading,
    [addUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = action.payload;
      state.addModal = false;
    },
    [addUsers.rejected]: setError,
    [editUsers.pending]: setLoading,
    [editUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = action.payload;
      state.editModal = false;
    },
    [editUsers.rejected]: setError,
    [deleteUsers.pending]: setLoading,
    [deleteUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = action.payload;
      state.deleteModal = false;
    },
    [deleteUsers.rejected]: setError,
  },
});

export const { handleChange, handleModalOpenAndClose } = slice.actions;

export default slice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAlbums = createAsyncThunk(
  "users/getAlbums",
  async (page, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );
      console.log(data);
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

const initialAlbum = {
  first_name: "",
  last_name: "",
  email: "",
  avatar: "",
};
export const slice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
    album: initialAlbum,
    id: null,
    page: 1,
    total: 0,
    viewModal: false,
    loading: false,
    status: null,
  },
  reducers: {
    handleModalOpenAndClose: (state, action) => {
      const { view, id = null } = action.payload;
      state.viewModal = view;
      if (id) {
        state.id = id;
        state.album = state.albums.find((elem) => elem.id === id);
      }
    },
    handlePageChange: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [getAlbums.pending]: setLoading,
    [getAlbums.fulfilled]: (state, action) => {
      state.loading = false;
      state.albums = action.payload.data;
      state.total = action.payload.total_pages;
    },
    [getAlbums.rejected]: setError,
  },
});

export const { handlePageChange, handleModalOpenAndClose } = slice.actions;

export default slice.reducer;

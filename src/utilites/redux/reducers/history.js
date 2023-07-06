import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  postStatus: null,
  postDetail: null,
  searchTerm: '',
  searchResults: [],
  isDataNotFound: false,
  uuidHistory: null,
  filteredData: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostsStatus: (state, action) => {
      state.postStatus = action.payload;
    },
    setPostsDetails: (state, action) => {
      state.postDetail = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
      state.isDataNotFound = action.payload.length === 0;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
      state.isDataNotFound = false;
    },
    setUuidHistory(state, action) {
      state.uuidHistory = action.payload;
    },
    // Additional reducer
    filteredData: (state, action) => {
      state.filteredData = action.payload;
      state.isDataNotFound = action.payload.length === 0;
    },
    setFilterDataReq(state) {
      state.filteredData = [];
      state.isDataNotFound = false;
    },
  },
});

export const {
  setFilterDataReq,
  setPosts,
  setPostsStatus,
  setPostsDetails,
  setSearchTerm,
  setSearchResults,
  clearSearchResults,
  setUuidHistory,
  setFilterData, // Added reducer
} = postSlice.actions;

export default postSlice.reducer;

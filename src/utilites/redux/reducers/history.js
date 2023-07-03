import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  postStatus: null,
  postDetail: null,
  searchTerm: '',
  searchResults: [],
  isDataNotFound: false,
  uuidHistory:null
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
    setUuidHistory(state, action){
      state.uuidHistory=action.payload;
    }
  },
});

export const {
  setPosts,
  setPostsStatus,
  setPostsDetails,
  setSearchTerm,
  setSearchResults,
  clearSearchResults,
  setUuidHistory
} = postSlice.actions;

export default postSlice.reducer;

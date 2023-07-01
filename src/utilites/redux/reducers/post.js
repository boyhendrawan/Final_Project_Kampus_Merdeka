import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  postStatus: null,
  postDetail: null,
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
  },
});

export const { setPosts, setPostsStatus, setPostsDetails } = postSlice.actions;

export default postSlice.reducer;

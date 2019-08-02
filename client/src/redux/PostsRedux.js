import axios from "axios";

import { API_URL } from "../config";

/* SELECTORS */
export const getRequest = ({ posts }) => posts.request;
export const getPosts = ({ posts }) => posts.data;
export const getPostsNumber = ({ posts }) => posts.data.length;
export const getSinglePost = ({ posts }) => posts.singlePost;

/* ACTIONS */
// action name creator
const reducerName = "posts";
const createActionName = name => `app/${reducerName}/${name}`;

export const START_REQUEST = createActionName("START_REQUEST");
export const END_REQUEST = createActionName("END_REQUEST");
export const ERROR_REQUEST = createActionName("ERROR_REQUEST");
export const RESET_REQUEST = createActionName("RESET_REQUEST");
export const LOAD_POSTS = createActionName("LOAD_POSTS");
export const LOAD_SINGLE_POST = createActionName("LOAD_SINGLE_POST");
export const LOAD_POSTS_PAGE = createActionName("LOAD_POSTS_PAGE");
export const LOAD_RANDOM_POST = createActionName("LOAD_RANDOM_POST");

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadSinglePost = payload => ({ payload, type: LOAD_SINGLE_POST });
export const loadPostsByPage = payload => ({ payload, type: LOAD_POSTS_PAGE });
export const loadRandomPost = payload => ({ payload, type: LOAD_RANDOM_POST });

/* INITIAL STATE */
const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null
  },
  singlePost: {
    id: "",
    title: "",
    content: ""
  },
  postsNumber: 0,
  postsPerPage: 10,
  presentPage: 1
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: null }
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true }
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false }
      };
    case RESET_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: null }
      };
    case LOAD_POSTS:
      return { ...statePart, data: action.payload };
    case LOAD_SINGLE_POST:
      return { ...statePart, singlePost: action.payload };
    case LOAD_RANDOM_POST:
      return { ...statePart, singlePost: action.payload };
    case LOAD_POSTS_PAGE:
      return {
        ...statePart,
        postsPerPage: action.payload.postsPerPage,
        presentPage: action.payload.presentPage,
        postsNumber: action.payload.postsNumber,
        data: [...action.payload.posts]
      };
    default:
      return statePart;
  }
}

/* THUNKS */
export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());

    try {
      let res = await axios.get(`${API_URL}/posts`);
      dispatch(loadPosts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadSinglePostRequest = id => {
  return async dispatch => {
    dispatch(startRequest());

    try {
      let res = await axios.get(`${API_URL}/posts/${id}`);
      dispatch(loadSinglePost(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadRandomPostRequest = () => {
  return async dispatch => {
    dispatch(startRequest());

    try {
      let res = await axios.get(`${API_URL}/posts/random`);
      dispatch(loadRandomPost(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const addPostRequest = post => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${API_URL}/posts`, post);
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadPostsByPageRequest = page => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const postsPerPage = 10;
      const startAt = (page - 1) * postsPerPage;
      const limit = postsPerPage;

      let res = await axios.get(`${API_URL}/posts/range/${startAt}/${limit}`);

      const payload = {
        posts: res.data.posts,
        postsNumber: res.data.postsNumber,
        postsPerPage,
        presentPage: page
      };

      dispatch(loadPostsByPage(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

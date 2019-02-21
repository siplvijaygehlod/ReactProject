//action creator
import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

//export the post and user data 
export const fetchPostsAndUsers = () => async (dispatch,getState) => {
  await dispatch(fetchPosts());
  //console.log(getState().posts);
  const userIds = _.uniq(_.map(getState().posts,'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

//export post data from async
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get("/posts");
    
    dispatch({type: "FETCH_POSTS",payload: response.data})
  };

//export user data from async
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  
  dispatch({type: "FETCH_USER",payload: response.data})
};

/* //export userdata from async
export const fetchUser = id => async dispatch => _fetchUser(id,dispatch); 

//use memoize fun to request the user details for single time on server
const _fetchUser = _.memoize(async (id,dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  
  dispatch({type: "FETCH_USER",payload: response.data})
}); 
 */
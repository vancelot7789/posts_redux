import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
  }
}

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await (dispatch(fetchPosts()));
    const userIds = _.uniq(_.map(getState().posts,'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
  }
}


/**
 * solution 1 for memorization
 */
// export const fetchUser = (id) => {
//   return (dispatch) => {
//     _fetchUser(id, dispatch);
//   };
// };

// /**
//  * solution 1 for memorization
//  */
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type: 'FETCH_USER', payload: response.data});
// })
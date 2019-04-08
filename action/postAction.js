import axios from 'axios';

export const getItems = () => dispatch => {
    dispatch(setPostsLoading());
    axios
    .get('./api/posts')
    .then(response => 
        dispatch({
            type : 'GET_ITEMS',
            payload : response.data
        })
    ) 
}
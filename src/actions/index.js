import jsonPlaceholader from "../apis/jsonPlaceholader";

//eikhane ekta function onno ekta function return kortase. arrow function are Anonymous function



export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholader.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

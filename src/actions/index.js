import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
export function fetchReddit() {
    // when using async actions and thunk, instead of returning the action object,
    // we return a callback function. This has a `dispatch` parameter that we
    // can use to dispatch other actions whenever we want.
    return function(dispatch) {
        dispatch(requestChildren());
        $.get("https://www.reddit.com/r/aww.json", function(data) {
            // Here is where we dig into the response JSON to find the data we actually need.
            const listOfPosts = data.data.children;
            dispatch(receiveChildren(listOfPosts));
        });
    }
}

// Allow the reducer to update the state when the request starts loading.
function requestChildren() {
    return {
        type: "REQUEST_CHILDREN"
    }
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receiveChildren(listOfPosts) {
    return {
        type: "RECEIVE_CHILDREN",
        data:listOfPosts
    }
}

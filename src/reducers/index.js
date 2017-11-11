Const INITIAL_STATE = {
  posts = [];
}

export default function (state = INITIAL_STATE, action){

    switch (action.type) {
      case 'LOADED':
      return Object.assign({}, state, {
             posts : posts
           });
        break;
      default:
        return state;
    }
}

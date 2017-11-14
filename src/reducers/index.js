const INITIAL_STATE = {
  data:[],
  isLoading:true
}

export default function(state = INITIAL_STATE, action) {
switch(action.type){
  case "REQUEST_CHILDREN":
            return Object.assign({}, state, {
                data: [],
                isLoading: true
            });
        case "RECEIVE_CHILDREN":
            return Object.assign({}, state, {
                data: action.data,
                isLoading: false
            });
        default:
            return state;
    }
}

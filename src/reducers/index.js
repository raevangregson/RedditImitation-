Const INITIAL_STATE = {
posts=[];
}

export default function (state = INITIAL_STATE, action){

    switch (action.type) {
      case 'LOADED':
      $.get("https://www.reddit.com/r/aww/.json", function(data){
        var dataChildren = data.data.children
        var post = {
          title:"",
          image:"",
          url:""
        }

        var loadedPosts = [];

        for(i=1;i<dataChildren.length;i++){

          post.title = dataChildren[i].data.title;
          post.image = dataChildren[i].data.preview.images[0].source.url;
          post.url = dataChildren[i].data.url
          loadedPosts.push(post);
}
      return Object.assign({}, state, {
             posts : loadedPosts;
           });
        break;
      default:
        return state;
    }
}

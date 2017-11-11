import React, {Component} from 'react';
import Post from './Post';

class Posts extends Component{

  render(){
    const allPosts = this.props.posts.map((post,index) =>
    (<Post key={post.index} post={post}/>))
    return(
      {allPosts}
    );
  }
}

export default Posts;

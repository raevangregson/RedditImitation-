import React, {Component} from 'react';
import { connect } from 'react-redux';
import ListPost from './ListPost';


class ListPosts extends Component{

  render(){
    const allPosts = this.props.data.map((post,index) =>(
      <ListPost key={post.title} post={post}/>
    ))
    return(
      <ol>
      {allPosts}
    </ol>
    );
  }
}

function mapStateToProps(state) {
    return {
        data:state
    };
}

// Call connect function from react-redux to give our component access to the
// Redux state.
export default connect(mapStateToProps)(ListPosts);

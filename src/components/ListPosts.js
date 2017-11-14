import React, {Component} from 'react';
import { connect } from 'react-redux';
import ListPost from './ListPost';


class ListPosts extends Component{

  render(){
    const allPosts = this.props.listOfPosts.map((post,index) =>(
      <ListPost key={post.data.id} post={post.data}/>
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
        listOfPosts:state.data
    };
}

// Call connect function from react-redux to give our component access to the
// Redux state.
export default connect(mapStateToProps)(ListPosts);

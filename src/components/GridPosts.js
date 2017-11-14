import React, {Component} from 'react';
import { connect } from 'react-redux';
import GridPost from './GridPost';


class GridPosts extends Component{

  render(){
    const allPosts = this.props.listOfPosts.map((post,index) =>(
      <GridPost key={post.data.id} post={post.data}/>
    ))
    return(
      <ol className='gridView'>
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
export default connect(mapStateToProps)(GridPosts);

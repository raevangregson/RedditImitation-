import React, {Component} from 'react';

class GridPost extends Component{

render(){
  return(
    <li className='gridpost'>
      <a className='url' href={this.props.post.permalink}><img className='image' src={this.props.post.thumbnail} alt='hello'></img></a>
      <a className='url' href={this.props.post.permalink}><div className='title'>{this.props.post.title}</div></a>
    </li>
  );
}



}

export default GridPost;

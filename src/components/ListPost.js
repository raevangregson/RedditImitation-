import React, {Component} from 'react';

class ListPost extends Component{

render(){
  return(
    <li className='listpost'>
      <a className='url' href={this.props.post.url}><img className='image' src={this.props.post.thumbnail} alt='hello'></img></a>
      <a className='url' href={this.props.post.url}><div className='title'>{this.props.post.title}</div></a>
    </li>
  );
}



}

export default ListPost;

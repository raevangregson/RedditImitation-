import React, {Component} from 'react';

class Post extends Component{

render(){

  return(
    <div className='post'>
      <a className='url' href={this.props.url}><img className='image'>{this.props.img}</img></a>
      <a className='url' href={this.props.url}><div className='title'>{this.props.title}</div></a>
    </div>
  );
}



}

export default Post;

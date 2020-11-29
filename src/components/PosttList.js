import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
class PostList extends React.Component{
  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    return (
      <div>PostList</div>
    );
  }
};

export default connect(null, {fetchPosts: fetchPosts})(PostList);
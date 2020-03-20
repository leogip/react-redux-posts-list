import React from 'react';
import { connect } from 'react-redux';

import PostItem from '../post-item/post-item';

function PostList({ formPosts }) {
  if (!formPosts.length) {
    return <p>Add new posts. You will see them here</p>;
  }

  return formPosts.map(post => <PostItem post={post} key={post.id} />);
}

const mapStateToProps = state => ({
  formPosts: state.posts.posts
});

export default connect(mapStateToProps, null)(PostList);

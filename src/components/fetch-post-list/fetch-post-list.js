import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../redux/actions';
import PostItem from '../post-item/post-item';
import Loader from '../loader/loader';

function FetchPostList({ fetchedPosts, fetchPosts, loading }) {
  if (loading) {
    return <Loader />;
  }
  if (!fetchedPosts.length) {
    return (
      <button className="btn btn-success" onClick={() => fetchPosts()}>
        Load posts
      </button>
    );
  }
  return fetchedPosts.map(post => <PostItem post={post} key={post.id} />);
}

const mapStateToProps = state => ({
  fetchedPosts: state.posts.fetchedPosts,
  loading: state.app.loading
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchPostList);

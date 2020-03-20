import React from 'react';
import FormAddPost from '../form-add-post/form-add-post';
import PostList from '../post-list/post-list';
import FetchPostList from '../fetch-post-list/fetch-post-list';

export default function App() {
  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col">
          <h2>Add new post</h2>
          <FormAddPost />
        </div>
      </div>
      <div className="row pt-5">
        <div className="col">
          <h2>Posts list</h2>
          <ul className="list-group">
            <PostList />
          </ul>
        </div>
        <div className="col">
          <h2>Fetching posts</h2>
          <ul className="list-group">
            <FetchPostList />
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function PostItem({ post }) {
  return <li className="list-group-item">{post.title}</li>;
}

import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getPostById } from '../../requests/queries';

const PostPage = () => {

  const { id } = useParams();
  const { data, loading } = useQuery(getPostById, {variables: {id}});

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h3>{data.post.title}</h3>
      <p>{data.post.body}</p>
    </div>
  )
};

export default PostPage;
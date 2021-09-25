import { gql } from '@apollo/client';

export const getPosts = gql`
  query getPosts {
    posts(pagination: {limit: 10 page: 1}){
      data{
        id
        title
        body
        author{
          name
        }
      }
    }
  }
`;

export const getPostById = gql`
  query getPostById($id: ID!) {
    post(postId: $id) {
      title
      body
      author{
        name
      }
    }
  }
`;
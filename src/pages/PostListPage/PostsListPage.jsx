import React from 'react';
import { useQuery } from '@apollo/client';
import { getPosts } from '../../requests/queries'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const PostsList = () => {

  const { data, loading } = useQuery(getPosts);

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    data.posts.data.map(post => (
      <Card key={post.id} sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='textSecondary' gutterBottom>
            {post.title}
          </Typography>
          <Typography color='textSecondary'>
            {post.author.name}
          </Typography>
          <Typography variant='body2' component='p' >
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={ `/post/${post.id}` } >
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    ))
  )
};

export default PostsList;
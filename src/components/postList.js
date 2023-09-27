import React from 'react'
import { usePostContext } from './postContext'
import { Grid, Typography, Paper, Container } from '@mui/material'

const PostList = () => {
  //object destructure getting data from the context
  const { posts, loading, error } = usePostContext()
  //   console.log('PostList: ', posts)

  //untill data not loaded, spinner is shown
  if (loading) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <div className="spinner"></div>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <Container
      sx={{
        backgroundColor: 'blanchedalmond',
        padding: '20px 0px',
      }}
    >
      <Paper sx={{ padding: '20px' }} elevation={2}>
        <Typography variant="h4" gutterBottom>
          Post List
        </Typography>
        <Grid container spacing={3}>
          {posts.map((post, i) => (
            <Grid
              item
              xs={12}
              md={6}
              key={post.id}
              sx={{ marginBottom: '10px' }}
            >
              <Paper
                elevation={2}
                style={{
                  padding: '20px',
                  marginBottom: '10px',
                  minHeight: '190px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid black',
                }}
              >
                <Typography variant="h6">
                  Post No:{' '}
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      padding: '5px',
                      border: '1px solid black',
                      borderRadius: '30%',
                    }}
                  >
                    {i + 1}
                  </span>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    textTransform: 'capitalize',
                    margin: '5px 0px',
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    textAlign: 'initial',
                  }}
                >
                  {post.body}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  )
}

export default PostList

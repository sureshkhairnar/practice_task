// import React from 'react'
// import { usePostContext } from './postContext'
// import { Grid, Typography, Paper, Container } from '@mui/material'

// const PostList = () => {
//   //object destructure getting data from the context
//   const { posts, loading, error } = usePostContext()
//   //   console.log('PostList: ', posts)

//   //untill data not loaded, spinner is shown
//   if (loading) {
//     return (
//       <div style={{ textAlign: 'center', paddingTop: '100px' }}>
//         <div className="spinner"></div>
//       </div>
//     )
//   }

//   if (error) {
//     return <div>Error: {error}</div>
//   }

//   return (
//     <Container
//       sx={{
//         backgroundColor: 'blanchedalmond',
//         padding: '20px 0px',
//       }}
//     >
//       <Paper sx={{ padding: '20px' }} elevation={2}>
//         <Typography variant="h4" gutterBottom>
//           Post List
//         </Typography>
//         <Grid container spacing={3}>
//           {posts.map((post, i) => (
//             <Grid
//               item
//               xs={12}
//               md={6}
//               lg={4}
//               xl={3}
//               key={post.id}
//               sx={{ marginBottom: '10px', flexGrow: 1, flexShrink: 1 }}
//             >
//               <Paper
//                 elevation={2}
//                 style={{
//                   padding: '20px',
//                   marginBottom: '10px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   border: '1px solid black',
//                 }}
//               >
//                 <Typography variant="h6">
//                   Post No:
//                   {i + 1}
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   style={{
//                     textTransform: 'capitalize',
//                     margin: '5px 0px',
//                   }}
//                 >
//                   {post.title}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   style={{
//                     textAlign: 'initial',
//                   }}
//                 >
//                   {post.body}
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Paper>
//     </Container>
//   )
// }

// export default PostList

import React from 'react'
import { usePostContext } from './postContext'
import { Grid, Typography, Paper, Container } from '@mui/material'

const PostList = () => {
  const { posts, loading, error } = usePostContext()

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
        marginBottom: '10px',
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
              lg={4}
              key={post.id}
              sx={{ marginBottom: '10px', flexGrow: 1, flexShrink: 1 }}
            >
              <Paper
                elevation={2}
                style={{
                  padding: '20px',
                  marginBottom: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid black',
                  height: '250px', // Set a fixed height for each post
                }}
              >
                <Typography variant="h6">Post No: {i + 1}</Typography>
                <Typography
                  variant="h5"
                  style={{
                    textTransform: 'capitalize',
                    margin: '5px 0px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    textAlign: 'initial',
                    textOverflow: 'ellipsis',
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

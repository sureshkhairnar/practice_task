import React from 'react'
import useWindowWidth from './useWindowWidth'
import { Typography, Container, Paper, Box } from '@mui/material'

const WindowWidthDisplay = () => {
  const windowWidth = useWindowWidth()

  return (
    <Container
      sx={{
        marginBottom: '10px',
        marginTop: '10px',
        padding: '20px',
        backgroundColor: 'blanchedalmond',
      }}
    >
      <Paper sx={{ padding: '20px' }}>
        <Typography variant="h3">Window Width Tracker</Typography>
        <Typography variant="h5" align="center">
          Current Window Width: {windowWidth}px
        </Typography>
      </Paper>
    </Container>
  )
}

export default WindowWidthDisplay

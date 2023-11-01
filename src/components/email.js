import React from 'react'
import emailjs from 'emailjs-com'
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_x3cn66g',
        'template_5nvktjb',
        e.target,
        '_A0_eTimkMMQKSOmj',
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text)
        },
        (error) => {
          console.error('Email sending failed:', error)
        },
      )

    e.target.reset()
  }

  return (
    <Container
      sx={{
        padding: '20px',
        backgroundColor: 'blanchedalmond',
        marginBottom: '10px',
        marginTop: '10px',
      }}
    >
      <form onSubmit={sendEmail}>
        <Paper sx={{ padding: '20px' }} elevation={2}>
          <Typography variant="h4" marginBottom={'10px'}>
            Contact Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                variant="outlined"
                name="user_name"
                label="User Name"
                type="text"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                variant="outlined"
                name="user_email"
                label="User Email"
                type="email"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                variant="outlined"
                name="message"
                label="Message"
                type="text"
                placeholder="Enter message here"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ minWidth: '100px' }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Container>
  )
}

export default ContactForm

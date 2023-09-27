import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Grid,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material'

const DynamicForm = ({ formConfig }) => {
  //validation of form fields with yup validation
  const validationSchema = yup.object().shape(
    formConfig.reduce((acc, field) => {
      if (field.validation) {
        acc[field.name] = field.validation
      }
      return acc
    }, {}),
  )

  //initialvalues for form fields
  const initialValues = formConfig.reduce((acc, field) => {
    acc[field.name] = field.defaultValue || ''
    return acc
  }, {})

  //formik package used for DynamicForm
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Data:', values)
    },
  })

  return (
    <Container
      sx={{
        padding: '20px',
        backgroundColor: 'blanchedalmond',
        marginBottom: '10px',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Paper sx={{ padding: '20px' }} elevation={2}>
          <Typography variant="h4" marginBottom={'10px'}>
            Dynamic Form
          </Typography>
          <Grid container spacing={2}>
            {formConfig.map((field) => (
              <Grid item xs={12} md={6} key={field.name}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id={field.name}
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  error={
                    formik.touched[field.name] &&
                    Boolean(formik.errors[field.name])
                  }
                  helperText={
                    formik.touched[field.name] && formik.errors[field.name]
                  }
                />
              </Grid>
            ))}
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

export default DynamicForm

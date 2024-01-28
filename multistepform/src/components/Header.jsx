import { Grid } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Grid container style={{ marginTop: "50px" }} justifyContent="center">
              <Grid justifyContent="center" item xs={10} sm={8} md={8} lg={8}>
                <h1>Apply for a job</h1>
                <p style={{ maxWidth: "inherit" }}>We have a lot of job opportunities and are hiring, we are always looking for high-talented candidates of all the
                  business types. use the form below and let us know about you and we will contact you back.
                </p>
              </Grid>
            </Grid>
  )
}

export default Header
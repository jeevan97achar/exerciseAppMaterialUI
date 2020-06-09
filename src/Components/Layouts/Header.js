import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default props =>
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h5" color='inherit'>
        Excercise Database
      </Typography>
        </Toolbar>
    </AppBar>
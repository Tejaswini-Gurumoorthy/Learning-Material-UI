import { Container, ThemeProvider, Typography } from '@material-ui/core'
import { CssBaseline } from '@mui/material'
import React from 'react'
import useStyles from '../styles';
import primaryMainTheme from '../theme';

function LoginPage() {
    const classes= useStyles();
  return (
    <>
    <ThemeProvider theme={primaryMainTheme}>
    <CssBaseline/>
        <div className={classes.main}>

        </div>
    </ThemeProvider>
    </>
    )
}

export default LoginPage
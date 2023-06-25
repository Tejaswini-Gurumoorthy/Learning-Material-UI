import { Container, ThemeProvider, Typography } from '@material-ui/core';
import { CssBaseline } from '@mui/material';
import React from 'react';
import useStyles from '../styles';
import primaryMainTheme from '../theme';
import Vector from '../assets/Vector.png';
import Ellipse1 from '../assets/Ellipse1.png';
import Ellipse2 from '../assets/Ellipse2.png';
import Ellipse3 from '../assets/Ellipse3.png';
import Cart from '../assets/group.png';


function LoginPage() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={primaryMainTheme}>
        <CssBaseline />
        <div className={classes.main}>
          <img src={Vector} alt="Vector" className={classes.vectorImage} />
          <img src={Ellipse1} alt="Ellipse1" className={classes.ellipse1}/>
          <img src={Ellipse2} alt="Ellipse2" className={classes.ellipse2}/>
          <img src={Ellipse3} alt="Ellipse3" className={classes.ellipse3}/>
          <img src={Cart} alt="Cart" className={classes.cart}/>
        </div>
      </ThemeProvider>
    </>
  );
}

export default LoginPage;
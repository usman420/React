import React from 'react';
//import { makeStyles } from '@mi/core/styles';
import { Typography, Container } from "@mui/material";




const Footer = () => {
  //const classes = useStyles();

  return (
    <footer >
      <Container maxWidth="sm" sx ={{position:'relative',bottom:0,left:0,right:0}}>
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} To-Do-App. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Container, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import Checkbox from '@mui/material/Checkbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link }from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

import './signin.scss';

const Register = () => {
return (
  <Container>
    <Box sx={{
    gridTemplateColumns: {
      lg: '5fr 7fr',
    },
    display: 'grid',
    gap: 0,
    p: 0,
    }}>
      <div className="login-background"></div>
      <div className="login">
        <h4 className="login-title">Create an account</h4>
        <div className="login-box">
          <div className="login-input">
            <AccountCircleIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
            <TextField sx={{ width: '100%', fontFamily: '"Josefin Sans", sans-serif' }} id="input-with" placeholder="Name" />
          </div>
          <div className="login-input">
            <EmailIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
            <TextField sx={{ width: '100%' }} id="input-with-sx" placeholder="Email Address" />
          </div>
          <div className="login-input">
            <KeyIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
            <TextField sx={{ width: '100%', fontFamily: '"Josefin Sans", sans-serif' }} id="input-with" placeholder="Password" />
          </div>
          <div className="login-input">
            <KeyIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
            <TextField sx={{ width: '100%', fontFamily: '"Josefin Sans", sans-serif' }} id="input-with" placeholder="Confirm Password" />
          </div>
          <p><ReCAPTCHA
              sitekey="6Lel3SofAAAAAF_78I1Mvtvs_5DquEW-AnNG180z"
              // onChange={onChange}
          /></p>
          <button className="button login-button">Sign-up</button>
          <p className="text-align-center">or login with</p>
          <Box sx={{
            gridTemplateColumns: {
              lg: '1fr 1fr',
            },
            display: 'grid',
            gap: 0,
            borderBottom: '1px solid #ccc',
          }}>
            <div className="login-button-pr"><button className="button login-button login-button-bg-fb">Facebook</button></div>
            <div className="login-button-pl"><button className="button login-button login-button-bg-gg">Google</button></div>
          </Box>
          <p className="text-align-center">Already have an account? <Link to="/#" className>Login Here</Link></p>
        </div>
      </div>
    </Box>
  </Container>
  );
}

export default Register;
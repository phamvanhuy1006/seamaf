import React, { useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link }from 'react-router-dom';
import axios from 'axios';

import './signin.scss';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    email !== '' &&
    axios.post('/api/login?email=' + email + '&password=' + password)
      .then(response => {
        return ([
          localStorage.setItem('user', JSON.stringify(response.data)),
          setUser(response.data.user),
        ])
    })
  }, [password])

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
          <h4 className="login-title">Login to your account</h4>
          <div className="login-box">
            <div className="login-input">
              <EmailIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
              <TextField sx={{ width: '100%', p: 0 }} onChange={(e) => setEmail(e.target.value)} id="input-with-sx" placeholder="Email Address" />
            </div>
            <div className="login-input">
              <KeyIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
              <TextField sx={{ width: '100%', p:0, fontFamily: '"Josefin Sans", sans-serif' }} onChange={(e) => setPassword(e.target.value)} id="input-with" placeholder="Password" />
            </div>
            <div className="d-flex">
              <FormControlLabel
                label=""
                sx={{ marginLeft: 0 }}
                control={
                  <Checkbox
                    // checked={checked[0] && checked[1]}
                    // indeterminate={checked[0] !== checked[1]}
                    // onChange={handleChange1}
                    sx={{ padding:0,  '&.Mui-checked': { color: '#f51167' } }}
                  />
                }
                  />
                  <p>Remember me</p>
            </div>
            <Link to={ user ? '/' : '/login' } state={{ loading: true }}><button className="button login-button">Login</button></Link>
            <p className="login-forgot-password"><Link to="#">Forgot Password</Link></p>
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
            <p className="text-align-center">Check out as a guest? <Link to="/#" className>Click Here</Link></p>
            <p className="text-align-center">Don't have an account? <Link to="/#" className>Register Here</Link></p>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default Login;
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

import './Footer.scss';

const About = styled('div')(({ theme }) => ([

]));

const UserfulLinks = styled('div')(({ theme }) => ([
]));

const Blog = styled('div')(({ theme }) => ([

]));

const Contact = styled('div')(({ theme }) => ([

]));

const StyledLink = styled(Link)(({ theme }) => ({
  color: '#8f8f8f', 
  fontSize: '14px',
  lineHeight: 1.6,
  fontFamily: "'Josefin Sans', sans-serif",
  textDecoration: 'none',
  '&:hover': {
    color: 'white',
  },
  '&:hover .MuiSvgIcon-root': {
    backgroundColor: '#ec105a',
    borderRadius: '50%',
  },
}));

const StyledListIcon = styled(FiberManualRecordOutlinedIcon)(({ theme }) => ({
  fontSize: 8,
  color: '#ec105a',
  marginRight: '15px',
}));
const EmailBox = styled('div')(({ theme }) => ({
  position: 'relative',
}));

const EmailField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#fff',
  width: '90%',
  // padding: '0',
  '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
    fontFamily: "'Josefin Sans', sans-serif",
    height: '33px',
  },
  borderRadius: 5,
  border: '2px solid #f0f0f0'
}));

const FooterBlogImg = styled('div')(({ theme }) => ({
  width: 64,
  height: 64,
  marginRight: 24,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'top center'
}));

const SubcribeButton = styled(Button)(({ theme }) => ({
  // '&.css-1ck4ffh-MuiButtonBase-root-MuiButton-root': {
    position: 'absolute',
    top: 0,
    right: 24,
    height: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    texttransform: 'uppercase',
    fontSize: '12px',
    fontWeight: 700,
    color: 'red',
    cursor: 'pointer',
  // }
}));

const BlogStack = styled(Stack)(({ theme }) => ({

}));

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: 20,
  // flexDirection: { 
  //   sm: 'column'
  // }
}));

const ContactList = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  fontSize: '14px',
  marginBottom: '1.5rem'
}));

function Footer() {
  return (
    <footer>
      <div className="footer-background">
        <Container style={{ padding: 0 }}>
          <Box sx={{ flexGrow: 1 }}>
            <StyledStack direction={{ lg: 'row', md: 'column', sm: 'column', xs: 'column' }} sx={{ alignItems: 'flex-start' }}>
              <Stack direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }} sx={{ alignItems: 'flex-start', pt: 2, width: { lg: '50%'}}}>
                <About className="footer-stack-padding" sx={{width: { lg: '50%', md: '100%', sm: '100%', xs: '100%' }}}>
                  <div className="footer-title-text">About</div>
                  <p className="footer-text">Online & physical bead shop with the best beads and beading supplies in Zimbabwe ✓ Over 9000 beads for jewelry making ✓ Glass beads ✓ Beading supplies and much more!</p>
                  <img width="100%" src='/assets/cards.png' alt="logo" />
                  <EmailBox>
                    <EmailField placeholder="Enter e-mail"></EmailField>
                    <SubcribeButton sx={{ color: 'primary', right: { md: 44, sm: 74, xs: 34 }}}>subscribe</SubcribeButton>
                  </EmailBox>
                </About>
                <UserfulLinks className="footer-stack-padding" sx={{
                  width: { lg: '50%', md: '100%', sm: '100%', xs: '100%' },
                  '& li': {
                    // flexGrow: 1,
                    // alignItems: 'center',
                  },
                  '& ul': {
                    listStyleType: 'none', 
                    p: 0, width: '50%', 
                    mt: 0
                  }
                }}>
                  <div className="footer-title-text">Userful Links</div>
                  <div className="userful-links">
                    <ul>
                      <li>
                        <StyledLink href="#"><StyledListIcon />About Us</StyledLink>
                      </li>
                      <li>
                        <StyledLink href="#"><StyledListIcon />Track Orders</StyledLink>
                      </li>
                      <li>
                        <StyledLink href="#"><StyledListIcon />Shipping</StyledLink>
                      </li>
                      <li>
                        <StyledLink href="#"><StyledListIcon />Contact</StyledLink>
                      </li>
                      <li>
                        <StyledLink href="#"><StyledListIcon />My Orders</StyledLink>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <StyledLink href="#"><StyledListIcon />Support</StyledLink>
                      </li>
                      <li>
                        <StyledLink href="#"><StyledListIcon />Terms of Use</StyledLink>
                      </li>
                      <li>
                        <StyledLink href="#"><StyledListIcon />Privacy Policy</StyledLink>
                      </li>
                      <li>
                        <StyledLink href="#"><StyledListIcon />Our Services</StyledLink>
                      </li>
                      <li>
                        <StyledLink href="#"><StyledListIcon />Blog</StyledLink>
                      </li>
                    </ul>
                  </div>  
                </UserfulLinks>
              </Stack>
              <Stack direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }} sx={{ alignItems: 'flex-start', pt: 2, width: { lg: '50%', } }}>
                <Blog className="footer-stack-padding" sx={{width: { lg: '50%', md: '100%', sm: '100%', xs: '100%' },}}>
                  <div className="footer-title-text">Blog</div>
                  <Stack direction="row" sx={{ flexGrow: 1, mb: '30px'}}>
                    <FooterBlogImg sx={{ backgroundImage: 'url(/assets/footerblog1.png)'}}></FooterBlogImg>
                    <div>
                      <span className="footer-title-text">BOHE MIAN WEDDING THEME</span>
                      <p className="footer-blog-text">1 year ago</p>
                      <a href="#" className="footer-blog-text footer-blog-link">Read More</a>
                    </div>
                  </Stack>
                  <Stack direction="row" sx={{ flexGrow: 1, mb: '30px'}}>
                    <FooterBlogImg sx={{ backgroundImage: 'url(/assets/footerblog2.png)'}}></FooterBlogImg>
                    <div>
                      <span className="footer-title-text">Vintage Wedding Theme `</span>
                      <p className="footer-blog-text">1 year ago</p>
                      <a href="#" className="footer-blog-text footer-blog-link">Read More</a>
                    </div>
                  </Stack>
                </Blog>
                <Contact className="footer-stack-padding" sx={{
                  width: { lg: '50%', md: '100%', sm: '100%', xs: '100%' },
                  }}>
                  <div className="footer-title-text">Contact</div>
                  <Stack>
                    <ContactList>
                      <span className="footer-contact-list-index">C.</span>
                      <p className="footer-contact-text">RVM SeaMaf</p>
                    </ContactList>
                    <ContactList>
                      <span className="footer-contact-list-index">B.</span>
                      <p className="footer-contact-text">108 Chinhoyi Street, Central Business District, Harare Zimbabwe</p>
                    </ContactList>
                    <ContactList>
                      <span className="footer-contact-list-index">T.</span>
                      <p className="footer-contact-text">+263782149840</p>
                    </ContactList>
                    <ContactList>
                      <span className="footer-contact-list-index">E.</span>
                      <p className="footer-contact-text">rvmseamaf@gmail.com</p>
                    </ContactList>
                  </Stack>
                </Contact>
              </Stack>
            </StyledStack>
          </Box>
          <div>
            <Toolbar>
              <div className="footer-icon-box">
                <InstagramIcon className="footer-icon" />
                <span className="footer-icon-text">INSTAGRAM</span>
              </div>
              <div className="footer-icon-box">
                <PinterestIcon className="footer-icon"/>
                <span className="footer-icon-text">PINTEREST</span>
              </div>
              <div className="footer-icon-box">
                <FacebookIcon className="footer-icon"/>
                <span className="footer-icon-text">FACEBOOK</span>
              </div>
              <div className="footer-icon-box">
                <TwitterIcon className="footer-icon"/>
                <span className="footer-icon-text">TWITTER</span>
              </div>
              <div className="footer-icon-box">
                <YouTubeIcon className="footer-icon" />
                <span className="footer-icon-text">YOUTUBE</span>
              </div>
              <div className="footer-icon-box">
                <LinkedInIcon className="footer-icon" />
                <span className="footer-icon-text">LINKEDIN</span>
              </div>
            </Toolbar>
            <Box sx={{ display: 'flow-root' }}>
              <h5 className="footer-copyright">Copyright ©2022 All rights reserved | Developed By Eloquent Geeks</h5>
            </Box>
          </div>
        </Container>
      </div>
     
    </footer>
  );
}
  
export default Footer;

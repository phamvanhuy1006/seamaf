import * as React from 'react';
import { Text } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Link from '@mui/material/Link';

import Currency from './Currency';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: '#ccc',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  height: '44px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 82,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  '&.MuiLink-root:hover': {
    color: '#f51167',
  },
  fontFamily: "'Josefin Sans', sans-serif",
  fontSize: '16px',
  color: '#ffffff',
  marginRight: '50px',
  lineHeight: '1',
  padding: '17px 0',
}))

export default function Header() {

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ color: '#212529', bgcolor: 'white'}}>
          <Container className="padding-none">
            <Toolbar sx={{ p: '10px 0'}} >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{  }}
                fontFamily="Josefin Sans, sans-serif"
                overflow="visible"
                fontWeight='bold'
              >
                RVM SeaMaf  
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search on RVM SeaMaf"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Currency />
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge color="error">
                    <FavoriteBorderIcon />
                  </Badge>
                  <span className="text-header">WishList</span>
                </IconButton>
                <IconButton>
                  <Badge badgeContent={1} color="error">
                    <ShoppingBagOutlinedIcon/>
                  </Badge>
                  <span className="text-header">Shopping Cart</span>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  // aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  // onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Box backgroundColor="#212529">
        <Container
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex',
            typography: 'body1',
            '& > :not(style) + :not(style)': {
              ml: 2,
            },
          }}
          // onClick=""
        >
          <StyledLink href="#" underline="none" className="navigation-text">
            {'Home'}
          </StyledLink>
          <StyledLink href="#" underline="none" className="navigation-text">
            {'Our Shop'}
          </StyledLink>
          <StyledBadge badgeContent={'SALE'} badgeStyle color="error">
            <StyledLink href="#" underline="none" className="navigation-text">
              {'On Sale'}
            </StyledLink>
          </StyledBadge>
          <StyledLink href="#" underline="none" className="navigation-text">
            {'Our Services'}
          </StyledLink>
          <StyledLink href="#" underline="none" className="navigation-text">
            {'Blog'}
          </StyledLink>
          <StyledLink href="#" underline="none" className="navigation-text">
            {'Contact'}
          </StyledLink>
          <StyledLink href="#" underline="none" className="navigation-text">
            {'Signin'}
          </StyledLink>
          <StyledLink href="#" underline="none" className="navigation-text">
            {'Signup'}
          </StyledLink>
        </Container>
      </Box>
    </React.Fragment>
  );
}

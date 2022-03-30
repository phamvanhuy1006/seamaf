import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Currency from './Currency';
import { Link } from "react-router-dom";

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

export default function Header() {
  
  const pages = ['Home', 'Our Shop', 'On Sale', 'Our Services', 'Blog', 'Contact', 'Signin', 'Signup'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      {/* {/* <Link to="/invoices">Invoices</Link> |{" "} */}
        {/* <Link to="/banner">Expenses</Link>  */}
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
                fontSize="24px"
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
        <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to="/home" underline="none" className="nav-link">
            {'Home'}
          </Link>
          <Link to="/home" underline="none" className="nav-link">
            {'Our Shop'}
          </Link>
          <StyledBadge badgeContent={'SALE'} badgeStyle color="error">
            <Link to="/home" underline="none" className="nav-link">
              {'On Sale'}
            </Link>
          </StyledBadge>
          <Link to="/home" underline="none" className="nav-link">
            {'Our Services'}
          </Link>
          <Link to="/home" underline="none" className="nav-link">
            {'Blog'}
          </Link>
          <Link to="/home" underline="none" className="nav-link">
            {'Contact'}
          </Link>
          <Link to="/login" underline="none" className="nav-link">
            {'Signin'}
          </Link>
          <Link to="/home" underline="none" className="nav-link">
            {'Signup'}
          </Link>
          </Box>
        </Toolbar>
      </Container>
      </Box>
    </React.Fragment>
  );
}

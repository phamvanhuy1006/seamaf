import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Currency from "./Currency";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Search from './Search';
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: "44px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const UserButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Josefin Sans", sans-serif',
  fontSize: '16px',
  color: '#ffffff',
  marginRight: '50px',
  lineHeight: 1,
  padding: '17px 0',
  textDecoration: 'none'
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 82,
  },
}));

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'))?.user
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const pages = [
    "Home",
    "Our Shop",
    "On Sale",
    "Our Services",
    "Blog",
    "Contact",
    "Signin",
    "Signup",
  ];

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveUser = async (event) => {
   
  const dataRes =  await axios.get('/api/logout', {
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token
      }
    })
    .then(localStorage.removeItem('user'))
  }

  const handleLogout = () => {
    return ([
      handleRemoveUser(),
      handleClose(),
    ])
  }

  useEffect(() => {
    
  })


  return (
    <React.Fragment>
      {/* {/* <Link to="/invoices">Invoices</Link> |{" "} */}
      {/* <Link to="/banner">Expenses</Link>  */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ color: "#212529", bgcolor: "white" }}>
          <Container className="padding-none">
            <Toolbar sx={{ p: "10px 0" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{}}
                fontFamily="Josefin Sans, sans-serif"
                overflow="visible"
                fontWeight="bold"
                fontSize="24px"
              >
                RVM SeaMaf
              </Typography>
              <Search />
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                  <span className="text-header">Shopping Cart</span>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                  <MenuItem onClick={handleCloseNavMenu} sx={{ backgroundColor: "blue" }}>
                    <Link to="/" underline="none" className="nav-link">
                      {"Home"}
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} sx={{ backgroundColor: "blue" }}>
                    <Link to="/" underline="none" className="nav-link">
                      {"Our Shop"}
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} sx={{ backgroundColor: "blue" }}>
                    <StyledBadge badgeContent={"SALE"} color="error">
                      <Link to="/" underline="none" className="nav-link">
                        {"On Sale"}
                      </Link>
                    </StyledBadge>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} sx={{ backgroundColor: "blue" }}>
                    <Link to="/" underline="none" className="nav-link">
                      {"Our Services"}
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} sx={{ backgroundColor: "blue" }}>
                    <Link to="/" underline="none" className="nav-link">
                      {"Blog"}
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} sx={{ backgroundColor: "blue" }}>
                    <Link to="/login" underline="none" className="nav-link">
                      {"Contact"}
                    </Link>
                  </MenuItem>
                  {user ?
                    <MenuItem onClick={handleCloseNavMenu} sx={{ backgroundColor: "blue" }}>
                      <UserButton
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'false' : undefined}
                        onClick={handleClick}
                        className='nav-link'
                      >
                        {user.name}
                      </UserButton>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <Link to='/'><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                        <Link to='/admin'><MenuItem onClick={handleClose}>My Account</MenuItem></Link>
                        <Link to='/'><MenuItem onClick={handleLogout}>Logout</MenuItem></Link>
                      </Menu>
                    </MenuItem>
                  : (
                    <React.Fragment>
                      <MenuItem onClick={handleCloseNavMenu} sx={{ backgroundColor: "blue" }}>

                        <Link to="/login" underline="none" className="nav-link">
                          {"Signin"}
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleCloseNavMenu} sx={{ backgroundColor: "blue" }}>
                        <Link to="/register" underline="none" className="nav-link">
                          {"Signup"}
                        </Link>
                      </MenuItem>
                    </React.Fragment>
                  )
                  }     
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/" underline="none" className="nav-link">
                {"Home"}
              </Link>
              <Link to="/" underline="none" className="nav-link">
                {"Our Shop"}
              </Link>
              <StyledBadge badgeContent={"SALE"} color="error">
                <Link to="/" underline="none" className="nav-link">
                  {"On Sale"}
                </Link>
              </StyledBadge>
              <Link to="/" underline="none" className="nav-link">
                {"Our Services"}
              </Link>
              <Link to="/" underline="none" className="nav-link">
                {"Blog"}
              </Link>
              <Link to="/" underline="none" className="nav-link">
                {"Contact"}
              </Link>
              {user ? (
                <div>
                  <UserButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'false' : undefined}
                    onClick={handleClick}
                    className='nav-link'
                  >
                    {user.name}
                  </UserButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <Link to='/'><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                    <Link to='/admin'><MenuItem onClick={handleClose}>My Account</MenuItem></Link>
                    <Link to='/'><MenuItem onClick={handleLogout}>Logout</MenuItem></Link>
                  </Menu>
                </div>
              ) : (
                <React.Fragment>
                  <Link to="/login" underline="none" className="nav-link">
                    {"Signin"}
                  </Link>
                  <Link to="/register" underline="none" className="nav-link">
                    {"Signup"}
                  </Link>
                </React.Fragment>
              )}
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </React.Fragment>
  );
}

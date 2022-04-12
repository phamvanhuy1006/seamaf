import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Admin.scss';

export default function NavBar() {
  const [openProduct, setOpenProduct] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);
  const [openHome, setOpenHome] = React.useState(false);

  const handleLogout = () => {
    axios.get('/api/logout', {
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token
      }
    })
    .then(localStorage.removeItem('user'))
  }
  return (
    <List
    sx={{ width: '100%', maxWidth: 360, height: '100vh', p: 0, bgcolor: '#ccc' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        <div className="d-flex">
          <img className="admin-img" src="/assets/storage/logo-icon.png" alt="admin-img" />
          <div className="admin-logo-text">RVM SeaMaf</div>
        </div>
        <hr/>
        <ListItemButton onClick={() => openHome === 0 ? setOpenHome(false) : setOpenHome(0)}>
          <ListItemIcon>
            <img className="admin-img" src="/assets/storage/avatar.jpg" alt="admin-img" />
          </ListItemIcon>
          <ListItemText primary="Van Huy Pham" />
          {openHome === 0 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openHome === 0} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                Home
              </ListItemButton>
            </Link>
            <Link to="/" onClick={handleLogout}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                Logout
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </ListSubheader>
    }
  >
    <ListItemButton onClick={() => openProduct === 0 ? setOpenProduct(false) : setOpenProduct(0)}>
      <ListItemIcon>
        <ProductionQuantityLimitsIcon />
      </ListItemIcon>
      <ListItemText primary="Product" />
      {openProduct === 0 ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={openProduct === 0} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <Link to="/admin/products">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            All Products
          </ListItemButton>
        </Link>
        <Link to="/admin/categories">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            Categories
          </ListItemButton>
        </Link>
        <Link to="/admin/add-product">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            Add Product
          </ListItemButton>
        </Link>
      </List>
    </Collapse>

    <ListItemButton onClick={() => openUser === 1 ? setOpenUser(false) : setOpenUser(1)}>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
      {openUser === 1 ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={openUser === 1} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <Link to="/">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/admin/users">All Users</Link>
          </ListItemButton>
        </Link>
        <Link to="/">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            Administrators
          </ListItemButton>
        </Link>
      </List>
    </Collapse>
  </List>
  );
}
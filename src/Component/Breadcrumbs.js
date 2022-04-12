import * as React from 'react';
import { styled } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

import '../Body/product.scss';

function handleClick(event) {
  event.preventDefault();
}

const BreadcrumbsLink = styled(Link)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  color: '#414141',
  textDecoration: 'none',
  fontFamily: '"Josefin Sans", sans-serif',
}))

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbsLink className="product-tiltle-text" underline="hover" color="inherit" to="/">
          Home
        </BreadcrumbsLink>
        <BreadcrumbsLink
          underline="hover"
          color="inherit"
          to="/"
        >
          Shop
        </BreadcrumbsLink>
        {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
      </Breadcrumbs>
    </div>
  );
}

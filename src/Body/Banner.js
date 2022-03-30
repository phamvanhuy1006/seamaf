import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, styled } from '@mui/material';
import * as React from 'react';
import { StatusProduct } from './LastestProducts';
import './Body.scss';

const BannerCard = styled(Card)(({ theme }) => ({
  padding: '50px 34px 47px',
  position: 'relative',
  marginBottom: '40px',
  borderLeft: '5px solid #fff',
  borderRight: '5px solid #fff',
  borderRadius: '1rem',
}));

const Banner = ({backgroundImage, marginRight}) => {
  return (
        <BannerCard className="banner banner-set-bg" style={{ 'backgroundImage': `url(${backgroundImage})`}} sx={{ position: 'relative', width: '100%', marginRight: {marginRight} }}>
          <StatusProduct sx={{ fontSize: '14px', right: '10px', left: 'unset' }} label='new'/>
          <CardContent sx={{ padding: 0 }}>
            <Typography className="banner-title" sx={{ fontWeight:"600" }} variant="h5" component="div">
              Handmade
            </Typography>
            <Typography className="banner-text" sx={{ fontWeight:'400', mb: 1.5 }}>
              Hurry! 60% OFF!
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: 0 }}>
            <a className="button" size="small">SHOP NOW</a>
          </CardActions>
      </BannerCard>
  );
}

export default Banner;
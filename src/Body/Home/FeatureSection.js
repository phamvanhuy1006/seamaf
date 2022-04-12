import { Box, styled } from '@mui/material';

const Item = styled('div')(({ theme }) => ({
  '& img': {
    width: '30px',
    height: '30px',
    marginRight: '5px',
  },
  '& div': {
    color: '#111',
    fontWeight: 600,
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 25px',
}));

const FeatureSection = () => {
  return (
    <Box
      sx={{
          display: 'grid',
          gridAutoFlow: 'row',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          backgroundColor: '#f8f8f8'
      }}
      >
      <Item sx={{ gridColumn: '1'}}>
        <img src="assets/storage/feature-icon1.png"/>
        <div>Fast Secure Payments</div>
      </Item>
      <Item sx={{ gridColumn: '2', backgroundColor: '#f51167'}}>
        <img src="assets/storage/feature-icon2.png"/>
        <div style={{ color: 'white' }}>Premium Products</div>
      </Item>
      <Item sx={{ gridColumn: '3'}}>
        <img src="assets/storage/feature-icon3.png"/>
        <div>Affordable Delivery</div>
      </Item>
    </Box>
  );
}

export default FeatureSection;
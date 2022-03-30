import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Product } from './LastestProducts.js';

const TopSell = () => {
  return (
    <div>
      <Container>
      <Box
       sx={{
         p: 0, 
         display: 'grid',
         gridTemplateColumns: {
           lg: '1fr 1fr 1fr 1fr',
           md: '1fr 1fr 1fr',
           sm: '1fr 1fr',
           xs: '1fr',
         },
         width: '100%',
       }}
      >
        <div><Product /></div>
        <div><Product /></div>
        <div><Product /></div>
        <div><Product /></div>
        <div><Product /></div>
        <div><Product /></div>
        <div><Product /></div>
        <div><Product /></div>
        </Box>
      </Container>
      </div>
  );
}

export default TopSell;
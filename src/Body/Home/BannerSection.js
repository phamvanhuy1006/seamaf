import { Box, Container } from '@mui/material';
import Banner from './Banner.js';

export default function BannerSection () {
  const backgrounds = [
    'assets/storage/banner1.jpg',
    'assets/storage/banner3.jpg',
  ]
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%'}}>
        <Banner backgroundImage={backgrounds[0]} marginRight="10px"/>
        <Banner backgroundImage={backgrounds[1]}/>
      </Box>
    </Container>
  );
}
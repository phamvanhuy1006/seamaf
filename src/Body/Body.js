import './Body.scss';
import Snackbar from '@mui/material/Snackbar';
import SlideShow from './SlideShow.js';
import FeatureSection from './Home/FeatureSection.js';
import LastestProducts from './Home/LastestProducts.js';
import BannerSection from './Home/BannerSection.js';
import TopSell from './Home/TopSell.js';
import Banner from './Home/Banner.js';
import { Container } from '@material-ui/core';

function Body() {
    return (
      <div className="body">
        <SlideShow />
        <FeatureSection />
        <LastestProducts />
        <BannerSection />
        <TopSell />
        <Container>
          <Banner backgroundImage="assets/storage/banner4.jpg" />
        </Container>
      </div>
    );
  }
  
export default Body;

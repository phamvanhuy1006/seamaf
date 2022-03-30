import './Body.scss';
import Snackbar from '@mui/material/Snackbar';
import SlideShow from './SlideShow.js';
import FeatureSection from './FeatureSection.js';
import LastestProducts from './LastestProducts.js';
import BannerSection from './BannerSection.js';
import TopSell from './TopSell.js';
import Banner from './Banner.js';
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

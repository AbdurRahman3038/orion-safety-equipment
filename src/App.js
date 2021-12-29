import { BrowserRouter } from 'react-router-dom';

import TopHeader from './components/TopHeader/TopHeader';
import OneStop from './components/OneStop/OneStop';
import Services from './components/Services/Services';
import Certification from './components/Certification/Certification';
import Products from './components/Products/Products';
import Protection from './components/Protection/Protection';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';

function App() {

  return (
    <div>
      <BrowserRouter>
        <TopHeader></TopHeader>
        <Banner></Banner>
        <OneStop></OneStop>
        <Services></Services>
        <Certification></Certification>
        <Products></Products>
        <Protection></Protection>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

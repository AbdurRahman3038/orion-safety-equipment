import { BrowserRouter } from 'react-router-dom';

import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import TopHeader from './components/TopHeader/TopHeader';
import OneStop from './components/OneStop/OneStop';
import Services from './components/Services/Services';
import Certification from './components/Certification/Certification';
import Products from './components/Products/Products';

function App() {

  return (
    <div>
      <BrowserRouter>
        <TopHeader></TopHeader>
        <Header></Header>
        <Banner></Banner>
        <OneStop></OneStop>
        <Services></Services>
        <Certification></Certification>
        <Products></Products>
      </BrowserRouter>
    </div>
  );
}

export default App;

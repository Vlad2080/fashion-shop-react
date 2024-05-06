import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header'
import Promo from './components/promo/Promo';
import Banner from './components/banner/Banner';
import Popular from './components/popular/Popular';
import Community from './components/community/Community';

function App() {

  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Popular />
      <Community />

    </div>
  );
}

export default App;

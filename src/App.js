import './App.css';
import './styles/bootstrap.css'
import './components/Navs'
import Navs from './components/Navs';
import { Fragment } from 'react';
import Header from './components/Header';
import Habitat from './components/Habitat';
import Type from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Navs />
      <Header />
      <Habitat />
      <Type />
      <Footer />
    </Fragment>
  );
}

export default App;

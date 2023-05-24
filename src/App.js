import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {

  return (
    <div className="portfolio-app">
      <Header />
        <Home />
      <Footer />
    </div>
  );
}

export default App;

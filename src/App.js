import './App.css';
import './Header/home.css';
import Home from './Header/home';
import Features from './Features/features';
import Advertisement from './Advertisement/advertisement';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">
        <Home/>
        <Features/>
        <Advertisement/>
        <Footer/>
    </div>
  );
}

export default App;

import { useEffect } from 'react'; 
import Footer from './components/Footer';
import Genre from './components/Genre';
import Navbar from './components/Navbar';
import Slider from './components/Slider'; 

function App() {
  return (
    <div className="App">
        <Navbar />
        <Slider />
        <Genre />
        <Footer />
    </div>
  );
}

export default App;

import './App.css';
import './reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Booking from './components/Booking';
import Footer from './components/Footer';
import LunchDinner from './components/LunchDinner';
import Dessert from './components/Dessert';
import Drinks from './components/Drinks';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/lunch-dinner" element={<LunchDinner />} />
            <Route path="/dessert" element={<Dessert />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/contacts" element={<Footer />} />
        </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;

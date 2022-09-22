import './App.css';
import './reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contacts" element={<Footer />} />
        </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;

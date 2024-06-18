import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './Components/MovieCard';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import EnglishReviews from './Components/Reviews/EnglishReviews';
import BengaliReviews from './Components/Reviews/BengaliReviews';
import HindiReviews from './Components/Reviews/HindiReviews';
import ReviewContent from './Components/Reviews/ReviewContent';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
    <div>
       <Header/>
    </div>
    <Routes>
            <Route path="/" element = {<MovieCard/>} />
            <Route path="/Reviews/:movieTitle" element = {<ReviewContent/>} />
            <Route path="/bengaliMov" element = {<BengaliReviews/>} />
            <Route path="/englishMov" element = {<EnglishReviews/>} />
            <Route path="/hindiMov" element = {<HindiReviews/>} />
    </Routes>
    <div>
       <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

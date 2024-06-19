import React from "react";
import EnglishReviews from "./Reviews/EnglishReviews";
import HindiReviews from "./Reviews/HindiReviews";
import BengaliReviews from "./Reviews/BengaliReviews";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './MovieCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
  // Add your desired styles here
  height: "85vh !important",
};

const MovieCards = () => {
  return (
    <div className="background d-flex justify-content-center">
      <div className="row justify-content-center">
        <div className="card col-sm-12 col-md-6 col-lg-4 mb-3 mx-2" style={{height : "85vh", marginTop: "1rem"}}>
          <img className="card-img-top" src="https://www.tallengestore.com/cdn/shop/products/PatherPanchali-SatyajitRayBengaliMoviePoster-GraphicArtPoster_aabbf996-cb09-4508-91e0-e85b9aafae78.jpg?v=1684192687" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Bengali Movies</h5>
            <p className="card-text"></p>
            <Link to="/bengaliMov" className="btn btn-primary reviewButton">Reviews</Link>
          </div>
        </div>
        <div className="card col-sm-12 col-md-6 col-lg-4 mb-3 mx-2" style={{height : "85vh", marginTop: "1rem"}}>
          <img className="card-img-top" src="https://e1.pxfuel.com/desktop-wallpaper/857/657/desktop-wallpaper-dil-chahta-hai.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Hindi Movies</h5>
            <p className="card-text"></p>
            <Link to="/hindiMov" className="btn btn-primary reviewButton">Reviews</Link>
          </div>
        </div>
        <div className="card col-sm-12 col-md-6 col-lg-4 mb-3 mx-2" style={{height : "85vh", marginTop: "1rem"}}>
          <img className="card-img-top" src="https://www.hollywoodreporter.com/wp-content/uploads/2016/08/taxi_onesheet_international.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">English Movies</h5>
            <p className="card-text"></p>
            <Link to="/englishMov" className="btn btn-primary reviewButton">Reviews</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;

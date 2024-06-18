import React from "react";
import EnglishReviews from "./Reviews/EnglishReviews";
import HindiReviews from "./Reviews/HindiReviews";
import BengaliReviews from "./Reviews/BengaliReviews";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard(){
    const divStyle={
        width: '18rem',
        display: 'inline-block',
        margin: '6.8rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }

    return(
        <div className="background">
  <div class="card" style={divStyle}>
  <img class="card-img-top" src="https://www.tallengestore.com/cdn/shop/products/PatherPanchali-SatyajitRayBengaliMoviePoster-GraphicArtPoster_aabbf996-cb09-4508-91e0-e85b9aafae78.jpg?v=1684192687" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Bengali Movies</h5>
    <p class="card-text"></p>
    <a class="btn btn-primary"><Link to='/bengaliMov' className="reviewButton">Reviews</Link></a>
  </div>
</div>
<div class="card" style={divStyle}>
  <img class="card-img-top" src="https://e1.pxfuel.com/desktop-wallpaper/857/657/desktop-wallpaper-dil-chahta-hai.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Hindi Movies</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary"><Link to='/hindiMov' className="reviewButton">Reviews</Link></a>
  </div>
</div>
<div class="card" style={divStyle}>
  <img class="card-img-top" src="https://www.hollywoodreporter.com/wp-content/uploads/2016/08/taxi_onesheet_international.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">English Movies</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary"><Link to='/englishMov' className="reviewButton">Reviews</Link></a>
  </div>
</div>
        </div>
    )
}

export default MovieCard;
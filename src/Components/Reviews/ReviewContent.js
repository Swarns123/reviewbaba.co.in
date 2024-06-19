import BengaliReviews from "./BengaliReviews";
import EnglishReviews from "./EnglishReviews";
import HindiReviews from "./HindiReviews";
import './ReviewContent.css';
import { useLocation,useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import React from "react";


function ReviewContent() {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieTitle } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://run.mocky.io/v3/49624b03-86cc-40f6-b893-95cb84eda30a');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setReview(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const movieShow = review.find(mov => mov.movie === movieTitle);

  return (
    <div class="main background">
  <div class="m-3 row mx-0 contain">
    <div class="image mt-2 p-2 col-12 col-md-4">
      <img src={movieShow ? movieShow.image : ''} height="200" width="300" class="img-thumbnail" alt="Thar Movie" />
      <div class="mt-2 p-2 text-white">  <br /><br /><br />
        <strong>Director:</strong> {movieShow ? movieShow.director : ''}
        <br />
        <strong>Producer:</strong> {movieShow ? movieShow.producer : ''}
        <br />
        <strong>Starring:</strong> {movieShow ? movieShow.starring : ''}
        <br /><br /><br />
        <strong>Rating:</strong> 3
        <br />
        <span class="fa fa-star checked p-1" style={{ color: 'gold' }}></span>
        <span class="fa fa-star checked p-1" style={{ color: 'gold' }}></span>
        <span class="fa fa-star checked p-1" style={{ color: 'gold' }}></span>
        <span class="fa fa-star p-1"></span>
        <span class="fa fa-star p-1"></span>
      </div>
    </div>
    <div class="col-12 col-md-8 mt-2 p-2 text-white">  <p class="top-content pb-3">
        <strong style={{ fontSize: 'larger' }}>{movieShow ? movieShow.movie : ''}</strong>
        <br />
        Directed by {movieShow ? movieShow.director : ''}
        <br />
        Review: Swarnendu Saha
        <br />
      </p>
      <div style={{ fontFamily: 'Cabin, sans-serif' }}>
        <strong>Good points:</strong>
        <ol>  
          <li>{movieShow ? movieShow.good1 : ''}</li>
          <li>{movieShow ? movieShow.good2 : ''}</li>
          <li>{movieShow ? movieShow.good3 : ''}</li>
        </ol>

        <strong>Bad points:</strong>
        <ol>  
          <li>{movieShow ? movieShow.bad1 : ''}</li>
          <li>{movieShow ? movieShow.bad2 : ''}</li>
          <li>{movieShow ? movieShow.bad3 : ''}</li>
        </ol>

        <strong>Break:</strong> You may need a couple of breaks throughout the movie, you're not going
        to miss anything if you go and grab some munchies.
        <br /><br />
        <strong>Plot:</strong> {movieShow ? movieShow.plot : ''}
        <br /><br />
        <strong>Performance:</strong> {movieShow ? movieShow.performance : ''}
        <br /><br />
        <strong>Direction:</strong> {movieShow ? movieShow.direction : ''}
      </div>
    </div>
  </div>
  <page-footer></page-footer>
</div>
  );
}

export default ReviewContent;

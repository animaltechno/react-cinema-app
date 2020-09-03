import React from 'react';

import Rating from '../rating/Rating';
import './Details.scss';
import Tabs from './tabs/Tabs';
import Overview from './overview/Overview';
import Crew from './crew/Crew';
import Media from './media/Media';
import Reviews from './reviews/Reviews';

const Details = () => {
  return (
    <>
      <div className="movie-container">
        <div 
          className="movie-bg"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/65437/pexels-photo-65437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}}  
        >
        </div>
        <div className="movie-overlay"></div>
        <div className="movie-details">
          <div className="movie-image">
            <img src="https://images.pexels.com/photos/65437/pexels-photo-65437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
          </div>
          <div className="movie-body">
            <div className="movie-overview">
              <div className="title">
                Mission Impossible <span>2020-09-01</span>
              </div>
              <div className="movie-genres">
                <ul className="genres">
                  <li>Action</li>
                  <li>Commedy</li>
                  <li>Sci-fi</li>
                </ul>
              </div>
              <div className="rating">
                <Rating 
                  className="rating-stars"
                  rating={6.5}
                  totalStars={10}
                />
                &nbsp;
                <span>6.7</span>
                <p>(200) reviews</p>
              </div>
              <Tabs>
                <div label="Overview">
                  <Overview />
                </div>
                <div label="Crew">
                  <Crew />
                </div>
                <div label="Media">
                  <Media />
                </div>
                <div label="Reviews">
                  <Reviews />
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
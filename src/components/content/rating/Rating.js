import React, { useState, useEffect, Fragment, useRef } from 'react';
import './Rating.scss';

const Rating = ({ rating, totalStars, className }) => {
  const [ numberOfStars, setNumberOfStars] = useState();
  const ratingRef = useRef();

  useEffect(()=> {
    setNumberOfStars([...Array(totalStars).keys()].map(i => i+1));

    let percentage;

    if (rating <= 5) {
      percentage = (rating / 10) * 100;
    } else {
      percentage = (rating / 10) * 100;
    };

    const satrPercentage = `${Math.floor(percentage)}%`;
    
    ratingRef.current.style.width = satrPercentage;
  },[rating, totalStars]);


  return (
    <div className="star-rating"> 
      <div className={`back-stars ${className}`}>
        {numberOfStars && numberOfStars.map((index) => (
            <Fragment key={index}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))
        }

        <div className={`front-stars ${className}`} ref={ratingRef}> 
          {numberOfStars && numberOfStars.map((index) => (
              <Fragment key={index}>
                <i className="fa fa-star" aria-hidden="true"></i>
              </Fragment>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Rating;

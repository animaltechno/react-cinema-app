import React , { useState } from 'react'
import './MainContent.scss'
import Slideshow from '../slide-show/Slideshow'
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';

const MainContent = () => {
  const images = [
    {url: "https://images.unsplash.com/photo-1516717100004-8b2682dd9759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80", 
    rating: 7.4}, 
    {url: "https://images.unsplash.com/photo-1584660704707-c9aab18f7bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", 
    rating: 9.1}, 
    {url: "https://images.unsplash.com/photo-1452806723698-a8daf14aa079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80", 
    rating: 6.9},
    {url: "https://images.unsplash.com/photo-1567618722705-1437d282f887?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    rating: 8.5}, 
    {url: "https://images.unsplash.com/photo-1572036798084-d9d7dc3b57c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=530&q=80", 
    rating: 6.6}, 
    {url: "https://images.unsplash.com/photo-1589371954131-6b7959649541?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    rating: 8.9}, 
    {url: "https://images.unsplash.com/photo-1546497996-d3f9e43bf9f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", 
    rating: 9.0},
    {url: "https://images.unsplash.com/flagged/photo-1577907596406-01fe0b42fe5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80", 
    rating: 4.2},
    {url: "https://images.unsplash.com/photo-1561290022-baa0cda78dbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    rating: 7.1},
    {url: "https://images.unsplash.com/photo-1577953206384-7d40f0f03854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
    rating: 3.2},
    {url: "https://images.unsplash.com/photo-1567618937163-df4ffbf831ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80", 
    rating: 9.8},
    {url: "https://images.unsplash.com/photo-1590866715341-8eec3483b89c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
    rating: 8.1},
    {url: "https://images.unsplash.com/photo-1595506285505-b51050acdaa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
    rating: 4.0}
  ];

  const [currentPage, setCurrentPage ] = useState(1);

  const paginate = (type) => {
    if(type === 'prev' && currentPage >= 1 ) {
      setCurrentPage((prev) => prev -1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  }

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true}/>
      <div className="grid-movie-title">
        <div className="movie-type">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />


    </div>
  )
}

export default MainContent

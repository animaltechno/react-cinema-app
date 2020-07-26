import React from 'react'
import './MainContent.scss'
import Slideshow from '../slide-show/Slideshow'

const MainContent = () => {
  const images = [
    {url: "https://images.unsplash.com/photo-1516717100004-8b2682dd9759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"}, 
    {url: "https://images.unsplash.com/photo-1584660704707-c9aab18f7bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}, 
    {url: "https://images.unsplash.com/photo-1452806723698-a8daf14aa079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80"}
  ];
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true}/>
      <div className="grid-movie-title">
        <div className="movie-type">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>

      {/* display grid component */}

    </div>
  )
}

export default MainContent

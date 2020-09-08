import React , { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import './MainContent.scss'
import Slideshow from '../slide-show/Slideshow'
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';
import { IMAGE_URL } from '../../../services/movies.service';
import { getMovies, setResponseNumber } from '../../../redux/actions/movie';

const MainContent = (props) => {
  const { list, movieType, totalPages, page, getMovies, setResponseNumber } = props;
  const [currentPage, setCurrentPage ] = useState(page);
  const [images, setImages] = useState([]);
  const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0, 4);

  const HEADER_TYPE = {
    now_playing: "Now Playing", 
    popular : "Popular", 
    top_rated: "Top Rated", 
    upcoming: "Upcoming"
  };

  useEffect(() => {
    if(randomMovies.length) {
      const IMAGES = [
        {
          id: 1, 
          url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`
        }, 
        {
          id: 2, 
          url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`
        }, 
        {
          id: 3, 
          url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`
        }, 
        {
          id: 4, 
          url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}`
        }
      ];
      setImages(IMAGES);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setCurrentPage(page); 
    // eslint-disable-next-line
  }, [page, totalPages]);


  const paginate = (type) => {
    let pageNumber = currentPage;

    if(type === 'prev' && currentPage >= 1 ) {
      pageNumber -= 1;
    } else {
      pageNumber += 1;
    }
    setCurrentPage(pageNumber);
    setResponseNumber(pageNumber, totalPages);
    getMovies(movieType, pageNumber);
  }

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true}/>
      <div className="grid-movie-title">
        <div className="movie-type">{HEADER_TYPE[movieType]}</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        </div>
      </div>
      <Grid />
    </div>
  )
};


const mapStateToProps = ( state ) => ({
  list: state.movies.list,
  movieType: state.movies.movieType, 
  totalPages: state.movies.totalPages,
  page: state.movies.page
});

export default connect(
  mapStateToProps, 
  { getMovies, setResponseNumber }
)(MainContent)

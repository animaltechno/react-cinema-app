import React, { useState, useEffect, useRef } from 'react'
import MainContent from '../content/main-content/MainContent'
import Spinner from '../spinner/Spinner';
import {connect} from 'react-redux';
import { loadMoreMovies, setResponseNumber } from '../../redux/actions/movie';
import './Main.scss';

const Main = (props) => {
  const { loadMoreMovies, page, totalPages, setResponseNumber, movieType } = props
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(page);
  const mainRef = useRef()  
  const bottomLineRef = useRef()  
  
  useEffect(() =>  {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
    // eslint-disable-next-line
  }, [])

  useEffect(() =>  {
    setResponseNumber(currentpage, totalPages)
    // loadMoreMovies("now_playing", currentpage)
    // eslint-disable-next-line
  }, [currentpage, totalPages]);

  const fetchData = () => {
    let pageNumber = currentpage;
    if(page < totalPages) {
      pageNumber += 1;
      setCurrentpage(pageNumber);
      loadMoreMovies(movieType, pageNumber);
    } else {
      // loadMoreMovies(movieType, pageNumber);
    }
  }

  const handleScroll = () => {
    const containerHeight= mainRef.current.getBoundingClientRect().height;
    const { top: bottomLineTop } = bottomLineRef.current.getBoundingClientRect();

    if(bottomLineTop <= containerHeight) {
      // fetch data
      fetchData();
    }
  }

  return (
    <div className="main" ref={mainRef} onScroll={() => handleScroll()}>
      
      {
        loading ?  <Spinner /> : <MainContent />
      }
      <div ref={bottomLineRef}></div>
    </div>
  );
};

const mapStateToProps = (state) =>  ({
  list: state.movies.list,
  page: state.movies.page,
  totalPages: state.movies.totalPages, 
  movieType: state.movies.movieType
})

export default connect(
  mapStateToProps, 
  { loadMoreMovies, setResponseNumber}
)(Main)

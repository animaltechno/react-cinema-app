import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './Header.scss';
import logo from '../../assets/cinema-logo.svg'
import { getMovies, setMovieType, setResponseNumber, searchQuery, searchResult } from '../../redux/actions/movie';

const HEADER_LIST = [
  { id: 1, iconClass: 'fas fa-film', name: 'Now Playing', type: 'now_playing'}, 
  { id: 2, iconClass: 'fas fa-fire', name: 'Popular', type: 'popular'}, 
  { id: 3, iconClass: 'fas fa-film', name: 'Top Rated', type: 'top_rated'}, 
  { id: 4, iconClass: 'fas fa-plus-square', name: 'Upcoming', type: 'upcoming'}
];

const Header = (props) => {
  const { getMovies, setMovieType, page, totalPages, setResponseNumber, searchQuery, searchResult } = props;

  let [menuClass, setMenuClass] = useState(false);
  let [navClass, setNavClass] = useState(false);
  const [type, setType] = useState("now_playing");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMovies(type, page);
    setResponseNumber(page, totalPages);
    // eslint-disable-next-line
  }, [type]);

  const setMovieTypeUrl = (type) => {
    setType(type);
    setMovieType(type);
  }

  const toggleMenu = () => {
    // クリックしたらtrueに変換
    menuClass = !menuClass;
    navClass = !navClass;

    // trueが保存される
    setMenuClass(menuClass);
    setNavClass(navClass);

    if(navClass) {
      document.body.classList.add('header-nav-open')
    } else {
      document.body.classList.remove('header-nav-open')
    };
  }

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    searchQuery(e.target.value);
    searchResult(e.target.value);
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar">
          <div className="header-navbar">
            <div className="header-image">
              <img src={logo} alt=""/>
            </div>
            <div 
              className={`${menuClass ? "header-menu-toggle is-active" : "header-menu-toggle"}`}
              id="header-mobile-menu"
              onClick={() => toggleMenu()}  
              >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`${navClass ? "header-nav header-mobile-nav" : "header-nav"}`}>
              {
                HEADER_LIST.map((data) => 
                  <li 
                    className={data.type === type ? "header-nav-item active-item" : "header-nav-item" } 
                    key={data.id} 
                    onClick={() => setMovieTypeUrl(data.type)}
                  >
                     <span className="header-list-name">
                       <i className={data.iconClass}></i>
                     </span>
                     &nbsp;
                     <span className="header-list-name">{data.name}</span>
                   </li>
                  )
              }
              <input 
                type="text"
                className="search-input"
                placeholder="search for a movie"
                value={search}
                onChange={onSearchChange}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};

const mapStateToProps = ( state ) => ({
  list: state.movies.list, 
  page: state.movies.page, 
  totalPages: state.movies.totalPages,
  
});

export default connect(
  mapStateToProps, { getMovies, setMovieType, setResponseNumber, searchQuery, searchResult  }
)(Header);

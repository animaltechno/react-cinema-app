import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-header">Ooops!</h1>
      <p className="error-msg">Somethin went wrong</p>
      <Link to={'/'} className="error-link">
        <i className="icon-home"></i> Go back to home page
      </Link>
    </div>
  )
}

export default ErrorPage

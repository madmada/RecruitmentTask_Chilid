import React from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends React.Component {
  render() {
    const { backAction, forwardAction, currentPage} = this.props;

    return (
      <div className="pages-container">
        <button className="button" onClick={() => backAction()} disabled={currentPage === 1}>&lt; back</button>
        <div className="page-numbers">1 2</div>
        <button className="button" onClick={() => forwardAction()} disabled={currentPage === 2}>next &gt;</button>
      </div>
    );
  }
}
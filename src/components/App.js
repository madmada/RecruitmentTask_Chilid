import React, { Component } from 'react';
import { TableContainer } from './Table/Table.js';
import PropTypes from 'prop-types';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="workers-container">
          <img className="workers-icon" src="../../src/icons/workers.svg" />
        </div>
        <div className="table-header">
          <h1>Lista Pracowników</h1>
        </div>
        <div className="table-content">
          <TableContainer />
        </div>
        <div className="logo-container">
          <img className="logo-icon" src="../../src/icons/chilid-logo.svg" />
        </div>
      </div>
    );
  }
}

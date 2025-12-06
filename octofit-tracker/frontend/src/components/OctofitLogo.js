import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../docs/octofitapp-small.png';

const OctofitLogo = () => (
  <div className="d-flex align-items-center mb-3">
    <img src={logo} alt="Octofit Logo" style={{ height: '48px', marginRight: '16px' }} />
    <Link to="/" className="navbar-brand" style={{ fontSize: '1.5rem', color: '#007bff', fontWeight: 'bold' }}>
      Octofit Tracker
    </Link>
  </div>
);

export default OctofitLogo;

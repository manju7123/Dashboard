import React from 'react';
import './index.css';

const KPIBox = ({ title, value, logo }) => {
  return (
    <div className="kpi-box">
      <div className="kpi-icon">
        <img src={logo} alt={title} />
      </div>
      <div className="kpi-details">
        <h3 className="kpi-title">{title}</h3>
        <p className="kpi-value">{value}</p>
      </div>
    </div>
  );
};

export default KPIBox;

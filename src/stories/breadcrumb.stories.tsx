import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default { title: 'Components/Breadcrumb' };

export const SimpleBreadcrumb = () => (
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <div>
      <h6> Standard Breadcrumb </h6>
      <Breadcrumb breadcrumb>
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
    </div>
    <div>
      <h6> Centered Breadcrumb </h6>
      <Breadcrumb breadcrumb centered>
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
    </div>
  </div>
);
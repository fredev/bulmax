import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { StoryContainer } from './utils';

export default { title: 'Components/Breadcrumb' };

export const SimpleBreadcrumb = () => (
  <StoryContainer>
    <div>
      <h6 style={{ color: '#777' }}> Standard Breadcrumb </h6>
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
      <h6 style={{ color: '#777' }}> Centered Breadcrumb </h6>
      <Breadcrumb breadcrumb centered>
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
    </div>

    <div>
      <h6 style={{ color: '#777' }}> Right Breadcrumb </h6>
      <Breadcrumb breadcrumb right>
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
    </div>
  </StoryContainer>
);

export const Separators = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40}}>
    <div>
      <h6 style={{ color: '#777' }}>Breadcrumb with Arrow Separator </h6>
      <Breadcrumb breadcrumb arrowseparator>
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
    </div>

    <div>
      <h6 style={{ color: '#777' }}>Breadcrumb with Succeeds Separator </h6>
      <Breadcrumb breadcrumb succeedseparator>
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
    </div>

      <div>
        <h6 style={{ color: '#777' }}>Breadcrumb with Bullet Separator </h6>
        <Breadcrumb breadcrumb bulletseparator>
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </Breadcrumb>
      </div>

    <div>
      <h6 style={{ color: '#777' }}>Breadcrumb with Dot Separator </h6>
      <Breadcrumb breadcrumb dotseparator>
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

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40}}>
    <div>
      <h6 style={{ color: '#777' }}>Small Breadcrumb</h6>
      <Breadcrumb breadcrumb small>
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
    </div>

    <div>
      <h6 style={{ color: '#777' }}>Medium Breadcrumb</h6>
      <Breadcrumb breadcrumb medium>
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
    </div>

    <div>
      <h6 style={{ color: '#777' }}>Large Breadcrumb</h6>
      <Breadcrumb breadcrumb large>
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
    </div>
  </div>
)
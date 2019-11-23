import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default { title: 'Components/Breadcrumb' };

export const SimpleBreadcrumb = () => (
  <section className="section">
    <div className="columns">
      <div className="column is-4">
        <h6 style={{ color: '#eee' }}> Standard Breadcrumb </h6>
      </div>
      <div className="column">
        <Breadcrumb breadcrumb>
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </Breadcrumb>
      </div>
    </div>

    <div className="columns">
      <div className="column is-4">
        <h6 style={{ color: '#eee' }}> Centered Breadcrumb </h6>
      </div>
      <div className="column">
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

    <div className="columns">
      <div className="column is-4">
        <h6 style={{ color: '#eee' }}> Right Breadcrumb </h6>
      </div>
      <div className="column">
        <Breadcrumb breadcrumb right>
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </Breadcrumb>
      </div>
    </div>
  </section>
);

export const Separators = () => (
  <section className="section">
    <div className="columns">
      <div className="column is-4">
        <h6 style={{ color: '#eee' }}>Breadcrumb with Arrow Separator </h6>
      </div>
      <div className="column">
        <Breadcrumb breadcrumb arrow>
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </Breadcrumb>
      </div>
    </div>

    <div className="columns">
      <div className="column is-4">
        <h6 style={{ color: '#eee' }}>Breadcrumb with Succeeds Separator </h6>
      </div>
      <div className="column">
        <Breadcrumb breadcrumb succeed>
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </Breadcrumb>
      </div>
    </div>

    <div className="columns">
      <div className="column is-4">
        <h6 style={{ color: '#eee' }}>Breadcrumb with Bullet Separator </h6>
      </div>
      <div className="column">
        <Breadcrumb breadcrumb bullet>
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </Breadcrumb>
      </div>
    </div>

    <div className="columns">
      <div className="column is-4">
        <h6 style={{ color: '#eee' }}>Breadcrumb with Dot Separator </h6>
      </div>
      <div className="column">
        <Breadcrumb breadcrumb dot>
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </Breadcrumb>
      </div>
    </div>
  </section>
);

export const Sizes = () => (
  <section className="section">
    <div className="columns">
      <div className="column is-4">
        <h6 style={{ color: '#eee' }}>Small Breadcrumb</h6>
      </div>
      <div className="column">
        <Breadcrumb breadcrumb small>
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </Breadcrumb>
      </div>
    </div>

    <div className="columns">
      <div className="column is-4">
        <h6 style={{ color: '#eee' }}>Medium Breadcrumb</h6>
      </div>
      <div className="column">
        <Breadcrumb breadcrumb medium>
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </Breadcrumb>
      </div>
    </div>

    <div className="columns">
      <div className="column is-4">
        <h6 style={{ color: '#eee' }}>Large Breadcrumb</h6>
      </div>
      <div className="column">
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
  </section>
);

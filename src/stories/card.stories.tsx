import React from 'react';
// import { StoryContainer } from './utils';
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import CardHeader from "../components/CardHeader";
import CardHeaderTitle from "../components/CardHeaderTitle";
import CardHeaderIcon from "../components/CardHeaderIcon";
import CardFooter from "../components/CardFooter";

export default { title: 'Elements/Card' };

export const Cards = () => (
  <div className="column" style={{ flexDirection: 'column' }}>
    <div className="columns">
      <div className="column is-6">
        <h3 className="is-size-3">Simple Card</h3>
      </div>
      <div className="column is-6">
        <Card>
          <CardContent>
            <p>Base Card</p>
          </CardContent>
        </Card>
      </div>
    </div>

    <div className="columns">

      <div className="column is-6">
        <h3 className="is-size-3">Card with header and footer</h3>
      </div>
      <div className="column is-6">
        <Card>
          <CardHeader>
            <CardHeaderTitle>
              Card Header
            </CardHeaderTitle>
            <CardHeaderIcon>
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
            </CardHeaderIcon>
          </CardHeader>
          <CardContent>
            <h3 className="is-size-3">Card Content</h3>
          </CardContent>
          <CardFooter>
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
);

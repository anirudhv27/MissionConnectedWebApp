import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent } from '@material-ui/core';
import Menus from '../../Menus';


export default function Event(props) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="card-box bg-light-gray border-0 text-light mb-4">
        <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <Menus />
                  <small className="text-black-80 font-size-sm d-block mb-1 text-uppercase">
                    {props.club}
                  </small>
                  <span className="text-black-80 font-size-lg mt-1">{props.event}<br></br></span>
                  <span className="text-black-80 font-size-sm mt-1"><br></br>{props.date}<br></br></span> 
                  <span className="text-black-80 font-size-sm mt-1">{props.time}<br></br></span> 
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'circle']}
                  className="text-success mr-1"
                />
                <span className="text-black-80">{props.status}</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
  );
}

import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent, Button, Divider, Box, Popover } from '@material-ui/core';

import Menus from '../../Menus';

import Chart from 'react-apexcharts';


export default function LivePreviewExample() {


  const chart30Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#3c44b1'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 4
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart30Data = [
    {
      name: 'Customers',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart31Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#f4772e'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart31Data = [
    {
      name: 'Sales',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];
  // var clubs = ["MSJ Girls Who Code", "Green Club", "UNICEF"];
  // var events = ["Guest Speaker", "Lecture", "Info Session"];
  // var time = ["Feb 31", "Tuesday", "Wednesday"];
  // var date = ["3:00", "3:22", "3:00"]
  const list = [
    {
      club: 'MSJ Girls Who Code',
      event: 'Guest speaker event',
      date: 'February 31, 2021',
      time: '3:30-4:30',
      status: 'Going',
    }, 
    {
      club: 'MSJ UNICEF',
      event: 'UNICEF food drive',
      date: 'March 13, 2021',
      time: '2:30-5:00',
      status: 'Going',

    }, 
    {
      club: 'MSJ Biotechnology Club',
      event: 'Weekly meeting',
      date: 'March 2, 2021',
      time: '2:30-5:00',
      status: 'Going',

    },
  ];

  return (
    
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="p-3 mb-4 bg-unicef" style={{ height: '10rem' }}>
            <Menus />
            {/* <div style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}></div> */}
            <div className="text-black pt-2 text-center" style={{position: 'absolute', left: '0', right: '0', bottom: '1rem', alignItems: 'center'}}>MSJ UNICEF</div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="p-3 mb-4 bg-girlswhocode" style={{ height: '10rem' }}>
            <Menus />
            {/* <div style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}></div> */}
            <div className="text-black pt-2 text-center" style={{position: 'absolute', left: '0', right: '0', bottom: '1rem'}}>MSJ Girls Who Code</div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="p-3 mb-4 bg-biotechnology" style={{ height: '10rem' }}>
            <Menus />
            {/* <div style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}></div> */}
            <div className="text-black pt-2 text-center" style={{position: 'absolute', left: '0', right: '0', bottom: '1rem'}}>MSJ Biotechnology Club</div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="p-3 mb-4 bg-cs" style={{ height: '10rem' }}>
            <Menus />
            {/* <div style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}></div> */}
            <div className="text-black pt-2 text-center" style={{position: 'absolute', left: '0', right: '0', bottom: '1rem'}}>MSJ Computer Science Club</div>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box bg-light-gray border-0 text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <Menus />
                  <small className="text-black-80 font-size-sm d-block mb-1 text-uppercase">
                    MSJ Girls Who Code
                  </small>
                  <span className="text-black-80 font-size-lg mt-1">Guest speaker event<br></br></span>
                  <span className="text-black-80 font-size-sm mt-1"><br></br>February 31, 2021<br></br></span> 
                  <span className="text-black-80 font-size-sm mt-1">3:30-4:30<br></br></span> 
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'circle']}
                  className="text-success mr-1"
                />
                <span className="text-black-80">Going</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box bg-light-gray border-0 text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <Menus />
                  <small className="text-black-80 font-size-sm d-block mb-1 text-uppercase">
                    MSJ UNICEF
                  </small>
                  <span className="text-black-80 font-size-lg mt-1">UNICEF food drive<br></br></span>
                  <span className="text-black-80 font-size-sm mt-1"><br></br>March 13, 2021<br></br></span> 
                  <span className="text-black-80 font-size-sm mt-1">2:30-5:00<br></br></span> 
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'circle']}
                  className="text-success mr-1"
                />
                <span className="text-black-80">Going</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box bg-light-gray border-0 text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <Menus />
                  <small className="text-black-80 font-size-sm d-block mb-1 text-uppercase">
                    MSJ Biotechnology Club
                  </small>
                  <span className="text-black-80 font-size-lg mt-1">Weekly meeting<br></br></span>
                  <span className="text-black-80 font-size-sm mt-1"><br></br>March 2, 2021<br></br></span> 
                  <span className="text-black-80 font-size-sm mt-1">2:30-5:00<br></br></span> 
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'circle']}
                  className="text-success mr-1"
                />
                <span className="text-black-80">Going</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <CardContent className="p-0">
              <Grid container spacing={4} className="mt-4">
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-80 d-block">users</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-80 d-block">clicks</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-80 d-block">revenue</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="divider mt-4" />
              <div className="text-center py-4">
                <Button size="small" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </span>
                  <span className="btn-wrapper--label">Generate reports</span>
                </Button>
              </div>
            </CardContent>
            <div className="card-footer bg-light text-center">
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart30Options}
                  series={chart30Data}
                  type="line"
                  height={100}
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-body pb-1">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-80 d-block">users</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-80 d-block">clicks</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-80 d-block">revenue</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart31Options}
                  series={chart31Data}
                  type="line"
                  height={100}
                />
              </div>
            </div>
            <Divider />
            <div className="my-2 text-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="text-danger"
              />
              <span className="text-danger px-1">15.4%</span>
              <span className="text-black-80">new sales today</span>
            </div>
            <div className="card-footer bg-light p-4 text-center">
              <Button color="primary" variant="contained">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </span>
                <span className="btn-wrapper--label">View latest sales</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

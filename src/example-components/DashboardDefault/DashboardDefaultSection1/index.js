import React, { Fragment, useState, useEffect} from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid } from '@material-ui/core';

import Club from "./Club";
import Event from "./Event";
import firebase from "firebase/app";

import { auth, googleAuthProvider, database } from "../../../firebase";


// import Chart from 'react-apexcharts';

//try this out:  https://reactjs.org/docs/hooks-effect.html\



export default function LivePreviewExample() {

    const userID = firebase.auth().currentUser;
    console.log(userID)


    useEffect(() => {
        const ref = database.ref();
        const usersRef = ref.child('/users');
        usersRef.on('value', snap => console.log('from db', snap.val()));

        
    });
        
  const events = [
    {
      club: 'MSJ Girls Who Code',
      event: 'Guest speaker event',
      date: 'February 31, 2021',
      time: '3:30-4:30',
      status: 'Going',
      desc: 'We will have a guest speaker event on Febuary 29th,2021 at 3:30-4:30 with Girls who code',

      
    }, 
    {
      club: 'MSJ UNICEF',
      event: 'UNICEF food drive',
      date: 'March 13, 2021',
      time: '2:30-5:00',
        status: 'Going',
        desc: 'We will have a food drive event on feb 31,2021 at 3:30-4:30',


    }, 
    {
      club: 'MSJ Biotechnology Club',
      event: 'Weekly meeting',
      date: 'March 2, 2021',
      time: '2:30-5:00',
        status: 'Going',
        desc: 'We will have a meeting on Febuary 31,2021 at 1:00',


    },
  ];
  const clubs = [
    {
      name: 'MSJ UNICEF',
      link: require('../../../assets/images/clubs-bg/unicef.jpg'),
      description: "UNICEF, also greatly known as the United Nations International Children's Emergency Fund, is a United Nations agency responsible for providing humanitarian and developmental aid to children worldwide. MSJ UNICEF hopes to contribute to this cause and holds monthly fundraisers and events to accomplish this.",
      members: '32',
      meetings: 'Monthly meetings @ lunch',
    },
    {
      name: 'MSJ Girls Who Code',
      link: require('../../../assets/images/clubs-bg/girlswhocode.jpg'),
      description: "MSJ Girls Who Code welcomes all levels of coders on campus looking to build a community and expand their coding skill set. Throughout the year, we host speakers, go on fieldtrips, attend hackathons as a club, and complete personal projects in multiple languages. In the past years, we’ve met Reshma Saujani, the CEO of GWC, visited Netflix and Google, and invited speakers from a vast range of fields. We compete at CodeDay annually and teach many languages including HTML, Javascript, Python, etc. Join for a new learning experience every week! Join our Facebook group (@MSJ Girls Who Code) for up to date meeting information and email us at msjgwc@gmail.com with any questions. ",
      members: '70',
      meetings: 'Weekly meetings on Wednesdays @ 3:00-4:30',
    },
    {
      name: 'MSJ Biotechnology Club',
      link: require('../../../assets/images/clubs-bg/biotechnology.jpg'),
      description: "MSJ Biotechnology Club is a student organization for students interested in careers in the STEM field. We explore the link between healthcare and technology through lab work and research experiment. We listen to guest speakers talk about careers in this field, discuss journal articles, and participate in local STEM focused events. Whether you're iterested in medicine, robotics, or research, MSJ Biotechnology Club will help enrich your understanding in this vast field.",
      members: '19',
      meetings: 'Weekly meetings on Fridays @ 2:30-4:00',
    },
    {
      name: 'MSJ Computer Science Club',
      link: require('../../../assets/images/clubs-bg/cs.jpg'),
      description: "We meet on Fridays from 3 to 4 pm on our Discord server (join using this link: https://discord.gg/JWu6KPz). Please also join our Facebook Group, MSJ Compsci Club. If you have any questions, ask on Discord, contact an officer on Messenger, or email msjhscompsci@gmail.com.",
      members: '46',
      meetings: 'Weekly meetings on Fridays @ 3:00-4:30',
    }
  ];

  
  // const chart30Options = {
  //   chart: {
  //     toolbar: {
  //       show: false
  //     },
  //     sparkline: {
  //       enabled: true
  //     }
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   colors: ['#3c44b1'],
  //   stroke: {
  //     color: '#4191ff',
  //     curve: 'smooth',
  //     width: 4
  //   },
  //   xaxis: {
  //     crosshairs: {
  //       width: 1
          {
          }
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
      </Grid> */}
  //   yaxis: {
  //     min: 0
  //   },
  //   legend: {
  //     show: false
  //   }
  // };
  // const chart30Data = [
  //   {
  //     name: 'Customers',
  //     data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
  //   }
  // ];

  // const chart31Options = {
  //   chart: {
  //     toolbar: {
  //       show: false
  //     },
  //     sparkline: {
  //       enabled: true
  //     }
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   colors: ['#f4772e'],
  //   stroke: {
  //     color: '#4191ff',
  //     curve: 'smooth',
  //     width: 3
  //   },
  //   xaxis: {
  //     crosshairs: {
  //       width: 1
  //     }
  //   },
  //   yaxis: {
  //     min: 0
  //   },
  //   legend: {
  //     show: false
  //   }
  // };
  // const chart31Data = [
  //   {
  //     name: 'Sales',
  //     data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
  //   }
  // ];
  function generateClubs(clubs) {
    return clubs.map((club) => {
      return <Club name={club.name} link={club.link} description={club.description} members={club.members} meetings={club.meetings}/>;
    });
  }

  function generateEvents(events) {
    return events.map((event) => {
        return <Event club={event.club} event={event.event} date={event.date} time={event.time} status={event.status} description={event.desc} />;
    });
  }

  return (
    <Fragment>
      <Grid container spacing={4}>
      {generateClubs(clubs)}
      </Grid>
      <Grid container spacing={4}>
      {generateEvents(events)}
      </Grid>

          {
          }
    </Fragment>
  );
}



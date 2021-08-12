import React, { Fragment, useState, useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid } from '@material-ui/core';

import Club from "./Club";
import Event from "./Event";
import firebase from "firebase/app";

import { auth, googleAuthProvider, database } from "../../../firebase";


// import Chart from 'react-apexcharts';

//try this out:  https://reactjs.org/docs/hooks-effect.html\

//try storing as state, useState, lets it use it regardless, make events into state variable




export default function LivePreviewExample() {

    const userID = firebase.auth().currentUser;
    console.log("User ID "+ userID)

    var events = [];

    useEffect(() => { 
        console.log("Calling use effects")

        const ref = database.ref();
        const usersRef = ref.child('/users');
        usersRef.on('value', snap => console.log('from db', snap.val()));
        console.log("Current user " + auth.currentUser);


    },[]);




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

        function generateClubs(clubs) {
            return clubs.map((club) => {
                return <Club name={club.name} link={club.link} description={club.description} members={club.members} meetings={club.meetings} />;
            });
    }

    function getUserEventKeys(user) {

        console.log("Get user event keys start");
        var keys = [];
        const ref = database.ref();

        console.log("data base reference"+ref); 

        // Loop through events in order with the forEach() method.
        var query = ref.child('/users').child(user.uid).child('events').orderByKey();
        console.log("after query object "); 

        query.once("value")
            .then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    console.log("User event key " + key);
                    keys.push(key);
                    // childData will be the actual contents of the child
                    var childData = childSnapshot.val();
                    console.log("Is going " + childData.isGoing);
                    console.log("Member status " + childData.member_status);
                });
                
            });

        
        console.log("Total user event keys " + keys.length); // print total user event keys
        

        console.log("Get user event keys end");
        return keys;
    }

    function getUserEvents(currentUser) {

        console.log("Get user event start");
        events = [];

        const userEventKeys = getUserEventKeys(currentUser);

        const ref = database.ref();

        // Loop through events in order with the forEach() method.
        var query = ref.child('/schools').child('missionsanjosehigh').child('events').orderByKey();

        query.once("value")
            .then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    console.log(key);
                    var found = userEventKeys.includes(key);

                    if (found == true) {
                        console.log("Key found for user event " + key)
                        // childData will be the actual contents of the child
                        var childData = childSnapshot.val();

                        console.log("Event name " + childData.event_name)

                        events.push({
                            club: childData.event_club,
                            event_name: childData.event_name,
                            date: childData.event_date,
                            desc: childData.event_description,
                            url: childData.event_image_url,
                            preview: childData.event_preview
                        });
                    }
                });

                console.log("Total user event found " + events.length)
                
            });

        console.log("Get user event end");
    }

    function generateEvents(events) {
        console.log("Calling generate events")

        const userID = firebase.auth().currentUser;
        const ref = database.ref();
        const usersRef = ref.child('/users');
        usersRef.on('value', snap => console.log('from db', snap.val()));
        console.log("Current user " + auth.currentUser);

        console.log("Ppulating events start")
        getUserEvents(userID);
        console.log("Ppulating events end")

        return events.map((event) => {
            return <Event club={event.club} event={event.event_name} date={event.date} time={event.date} status={event.preview} description={event.desc} />;
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
        </Fragment>
    );
}



import React, { useContext, useState, useEffect } from "react";
import { database } from "../firebase";
import { query, orderByChild } from "firebase/database";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useAuth } from "./AuthContext";

  
export function DBClubsList({ children }) {
  const [clubs, setClubs] = useState();
  const [loading, setLoading] = useState(true);  
  const [expanded, setExpanded] = React.useState(false);
  const { currentUser } = useAuth();

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleJoinClub = clubId =>  {
    const usersClubsRef = database.ref().child('users_clubs')
    usersClubsRef.child(currentUser.uid+clubId).set({
      role: "Member",
      userId: currentUser.uid,
      clubId: clubId
    }, (error) => {
      if (error) {
        alert("Could Not add user to club");
      } else {
        alert("User added to the club");
      }
    });
  }


  function generateClubs() {
    if(clubs!=undefined) {
      var keys = Array.from( clubs.keys() );
  
      return keys.map(key => (
        <ExpansionPanel
        key={key}
        expanded={expanded === key}
        onChange={handleChange(key)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={key + "-content"}
          id={key+"-header"}>
          <Typography>{clubs.get(key).get('club_name')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>    
          {clubs.get(key).get('club_description')} {clubs.get('role')}
          {( clubs.get(key).get('role') == undefined ) ? <Button className="m-2" variant="contained" color="secondary" onClick = {() => handleJoinClub(key)}>
                      Join Club
                    </Button>  : "member"}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      ))
    }
  }

  useEffect(() => {
    const clubsRef = database.ref('schools/missionsanjosehigh/clubs');
    const usersClubsRef = database.ref('users_clubs');
    const dblist = new Map();
    const userClubsMap = new Map();

    usersClubsRef.orderByChild('userId').equalTo(currentUser.uid).once('value', (snapshot) => {
      snapshot.forEach(function(data) {
        //console.log(data.child('userId').val());
        //console.log(data.child('role').val());
        var clubId = data.child('clubId').val();
        userClubsMap.set(clubId,data.child('role').val());
      });
    }).then(function() {
      console.log(userClubsMap);
    });

    const dbloaded = clubsRef.orderByChild('club_name').once("value", function(snapshot) {    
      console.log(userClubsMap);   
      snapshot.forEach(function(data) {
        var item = new Map();
        var clubId = data.key;
        var role = userClubsMap.get(clubId);
        item.set("key",clubId);
        item.set("club_name" ,data.child('club_name').val());
        item.set("club_description" ,data.child('club_description').val());
        if(typeof(role) !== undefined) {
          item.set("role", role);
        }
        dblist.set(data.key,item);
      });
    }).then(function() {
      setClubs(dblist);
      setLoading(true);
      return () => dbloaded();
    });
  }, []);


  return (
    <div>
    {generateClubs() }
  </div>
  );
}

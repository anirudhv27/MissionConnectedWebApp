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

  const joinClub = value =>  {
    alert(currentUser.displayName + " joining " + value);
  }


  function generateClubs() {
    if(clubs!=undefined) {
      var keys = Array.from( clubs.keys() );
      console.log("keys " + keys);
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
          {clubs.get(key).get('club_description')}
          <Button className="m-2" variant="contained" color="secondary" onClick = {() => joinClub(key)}>
            Join Club
          </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      ))
    }
  }

  useEffect(() => {
    const clubsRef = database.ref('schools/missionsanjosehigh/clubs');
    const dblist = new Map();

    const dbloaded = clubsRef.orderByChild('club_name').once("value", function(snapshot) {       
      snapshot.forEach(function(data) {
        var item = new Map();
        item.set("key",data.key);
        item.set("club_name" ,data.child('club_name').val());
        item.set("club_description" ,data.child('club_description').val());
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

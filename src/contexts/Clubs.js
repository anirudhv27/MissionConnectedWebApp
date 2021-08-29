import React, { useContext, useState, useEffect } from "react";
import { database } from "../firebase";
import { query, orderByChild } from "firebase/database";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography } from '@material-ui/core';

  
export function DBClubsList({ children }) {
  const [clubs, setClubs] = useState();
  const [loading, setLoading] = useState(true);  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function generateClubs() {
    if(clubs!=undefined) {
      var keys = Array.from( clubs.keys() );
      return keys.map(key => (
        <ExpansionPanel
        expanded={expanded === key}
        onChange={handleChange(key)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="{key}-header">
          <Typography>{clubs.get(key).get('club_name')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {clubs.get(key).get('club_description')}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      ))
    }
  }

  useEffect(() => {
    const clubsRef = database.ref('schools/missionsanjosehigh/clubs');
    const dblist = new Map();
    const unsubscribe = clubsRef.orderByKey().on("child_added", function(snapshot) {
      var item = new Map();
      snapshot.forEach(function(data) {
        item.set("key",snapshot.key);
        item.set("club_name" ,snapshot.child('club_name').val());
        item.set("club_description" ,snapshot.child('club_description').val());
        dblist.set(snapshot.key,item);
      });
      setClubs(dblist);
      setLoading(false);
      return () => unsubscribe();
    });
  }, []);


  return (
    <div>
    {generateClubs() }
  </div>
  );
}

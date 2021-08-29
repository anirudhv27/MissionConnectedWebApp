import React, { Fragment } from 'react';

import { Typography } from '@material-ui/core';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function LivePreviewExample() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Fragment>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography>GMSJ Academic Challenge - Dr. Brucker</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Affectionately dubbed Academically Challenged by its members, MSJ Academic Challenge is a club that 
          organizes students to participate in various academic competitions. Students compete in Science Olympiad, Science Bowl, 
          Quiz Bowl, and Ocean Science Bowl at the regional, state, and national levels. Our goal is to encourage the study of science, 
          engineering, math, and the humanities, and create a tightly knit community of students that will lead MSJ to success at our 
          competitions.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography>MSJ App Development Club - Mrs. Sultana</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Teaching the various aspects of app development for operating softwares such as Android and iOS, also including tools like 
          Xcode for development.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header">
          <Typography>MSJ Artificial Intelligence Club - Mr. Remmers</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The MSJ Artificial Intelligence Club discusses, teaches, and applies various concepts in artificial intelligence and machine 
          learning, a rapidly growing, exciting field in computer science. Meetings are biweekly on Mondays(tentative) at lunch in C2 
          (Mr. Remmers’ room), where we host interesting lectures or labs to introduce the theory and applications of certain concepts.
           Apart from our labs and lectures, we participate in contests such as Kaggle and Topcoder and have exciting workshops by 
           industry professionals. Join us via our Facebook group “MSJ AI” and our Discord server to participate in the MSJ AI Club!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography>MSJ Biotechnology - TBD
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            MSJ Biotechnology hopes to benefit all students interested in the role of technology in fields such as medicine, 
            disabilities, and healthcare. MSJ Biotechnology strives to offer a diverse range of experiences to its members, 
            ranging from guest speakers to interactive workshops. Common activities include conducting experiments and attending 
            biotech events. We hope to offer insight into the future opportunities one will have in the field of biotechnology. 
            We hope to practice vital skills in biotechnology, such as applying concepts through experimentation along with 
            understanding medical concepts and their ties to modern technology. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  );
}

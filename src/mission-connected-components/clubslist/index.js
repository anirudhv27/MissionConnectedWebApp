import React, { Fragment } from 'react';

import { Typography } from '@material-ui/core';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { DBClubsList } from "../../contexts/Clubs";

export default function LivePreviewExample() {

  return (
    <Fragment>
      <DBClubsList>
      </DBClubsList>
    </Fragment>
  );
}

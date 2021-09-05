import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';
import { ExampleWrapperSeamless } from '../../layout-components';
import ClubsList from '../../mission-connected-components/clubslist';

export default function Accordions() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Clubs"
        titleDescription=""
      />
      <Grid container spacing={4}>
        <Grid item xs={12} lg={12}>
          <ExampleWrapperSeamless sectionHeading="Club Sections">
            <ClubsList />
          </ExampleWrapperSeamless>
        </Grid>
      </Grid>
    </Fragment>
  );
}

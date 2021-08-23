import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import FormsControlsBasic from '../../example-components/FormsControls/FormsControlsBasic';
import FormsControlsInputGroups from '../../example-components/FormsControls/FormsControlsInputGroups';
export default function FormsControls() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="List Clubs"
        titleDescription="List Clubs"
      />
      <ExampleWrapperSeamless sectionHeading="Basic">
        <FormsControlsBasic />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
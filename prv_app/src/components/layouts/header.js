/* Header component for the application*/
import React from 'react';
import CreateDialog from '../programrulevariable/dialog';
// mui imports
import {AppBar, Toolbar, Typography} from '@material-ui/core'
// Navigation bar components 
export default ({programs, onProgramRuleVariablesCreate}) =>
  <AppBar position ="static">
      <Toolbar>
          <Typography variant="h6" color="inherit" style={{flex: '1'}}>
              DHIS2
          </Typography>
          <Typography variant="h5" color="inherit" style={{flex: '1.5'}}>
              PROGRAM RULE VARIABLE 
          </Typography>
          <CreateDialog 
              programs={programs}
              onCreate= {onProgramRuleVariablesCreate}
          />
      </Toolbar>
  </AppBar>  
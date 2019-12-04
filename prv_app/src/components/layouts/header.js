import React from 'react'
// MUI imports
import {AppBar, Toolbar, Typography} from '@material-ui/core'

// Navigation bar components 
export default props =>
    <AppBar position ="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" style={{flex: '1'}}>
                DHIS2
            </Typography>
            <Typography variant="h5" color="inherit" style={{flex: '1.5'}}>
                PROGRAM RULE VARIABLE 
            </Typography>
        </Toolbar>
    </AppBar>  
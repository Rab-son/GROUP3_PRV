import React from 'react'
// import form material UI
import {Paper, Tabs} from '@material-ui/core'
import {Tab} from '@material-ui/core'

//DHIS2 Program Name Display => footer
export default props =>
    <Paper>
         <Tabs
            value = {0}
            indicatorColor="primary"
            textColor="primary"
            centered
        >   
            <Tab label= "View All" />
            <Tab label= "Program 1" />
            <Tab label= "Program 2" />
        </Tabs>
    </Paper>
import React from 'react'
// import form material UI
import {Paper, Tabs} from '@material-ui/core'
import {Tab} from '@material-ui/core'

//DHIS2 Program Name Display => footer
export default props =>
    <Paper>
         <Tabs
           value = {0}
           variant="scrollable"
           scrollButtons="on"
           indicatorColor="primary"
           textColor="primary"
           centered
       >   
       
           <Tab label= "View All" />
           {programs.map(group =>
               <Tab label = {group}/>)}
        </Tabs>
    </Paper>
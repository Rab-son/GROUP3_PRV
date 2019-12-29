/* Header component for the application*/
import React from 'react';
// mui imports
import {Paper, Tabs} from '@material-ui/core'
import {Tab} from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'

export default ({programs, program, onSelect}) => {
    const index = program 
        ? programs.findIndex(programNames => programNames === program) + 1
        : 0

const onIndexSelect = (e, index )=> 
    onSelect(index === 0 ? '' : programs[index-1])
    
  return <Paper>
         <Tabs
            value={index}
            variant="scrollable"
            onChange={onIndexSelect}
            indicatorColor="primary"
            textColor="primary"
            scrollable = {withWidth === 'xs'}
            scrollButtons = "on"
        >   
            <Tab label= "View All" />
            {programs.map(programNames =>
                <Tab key={programNames} label= {programNames} />
            )}
        </Tabs>
    </Paper>
}


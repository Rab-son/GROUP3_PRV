import React from 'react'
import {Grid, Paper} from '@material-ui/core'

export default props => 
    <Grid container sm>
        <Grid item sm>
            <Paper style={{padding : 50, marginTop : 10, marginRight : 20 }}>
            Program Rule Variable Pane
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={{padding : 50, marginTop : 10, marginRight : 20 }}>
            Create Program Rule Variable Pane
            </Paper>
        </Grid>
    </Grid>
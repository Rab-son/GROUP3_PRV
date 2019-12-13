import React from 'react'
import {Grid, Paper} from '@material-ui/core'
 
 const styles = {
            Paper:{
                padding:20,
                marginTop:5,
                marginRight:10,
                marginLeft:10,
                hieght:500,
                overflowY:'auto'
            }
        }

export default props => 
    <Grid container sm>
        <Grid item sm>
            <Paper style={styles.Paper}>
            Program Rule Variable Pane
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
            Create Program Rule Variable Pane
            </Paper>
        </Grid>
    </Grid>
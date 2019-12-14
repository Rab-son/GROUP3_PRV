import React, { useState } from 'react';
//Material UI imports
import {Button, Paper, Checkbox, List, ListItem, Grid } from '@material-ui/core';
import ArrowRight from '@material-ui/icons/ArrowForward';
import ArrowLeft from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';

// Paper Styling
const styles = {
    Paper : { padding: 20, 
              marginTop: 10,
              marginBottom: 10,
              marginRight: 10,
              marginLeft: 10,
              height: 300,
              overflowY: "auto"}

}
// Generating Program rule variables
function generatePRVs() {
    const PRVs = [];
    for (let i = 1; i < 7; i++){
        PRVs.push ({name : 'Data Element ' + i, box: 0, selected: false});
    }
    return PRVs;
}

export default function ViewLayout() {
    const [PRVs, setPRVs] = useState(generatePRVs());

    function generateMarkup(PRVs) {
        return (
            <Paper style= {styles.Paper}> 
                <CardHeader
                    style= {styles.cardHeader}
                /> 
                   <h3 align="center">Data Elements</h3>           
                <Divider/>
                <List>
                    {PRVs.map(PRV =>
                     <ListItem>
                         <Checkbox
                            variant="contained" 
                            color="primary" 
                            onChange={() => handleCheckboxChange(PRV)} checked={PRV.selected}/><span>{PRV.name}</span>
                     </ListItem>   
                        )}
                </List>
            </Paper>
        )
    }
    // reducing the data elements once from left pane once transfered to the right pane
    const [leftside, rightside] = PRVs.reduce((acc, cur) => {
        cur.box === 0 ? acc[0].push(cur) : acc[1].push(cur);
        return acc;
    }, 
    [[], []]
    );
    // Changing box states
    function handleCheckboxChange(PRV) {
        const newPRVs = [...PRVs];
        const index = PRVs.findIndex(i => i === PRV);
        newPRVs[index].selected = !newPRVs[index].selected;
        setPRVs(newPRVs);
    }
    // moving variable to the right pane of the transfer list
    function moveRight(){
        const newPRVs = PRVs.map(PRV => ({...PRV, box: PRV.selected ? 1: PRV.box}));
        setPRVs(newPRVs);
    }
    // moving variable to the left pane of the transfer list
    function moveLeft(){
        const newPRVs = PRVs.map(PRV => ({...PRV, box: PRV.selected ? 0: PRV.box}));
        setPRVs(newPRVs);
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={5}>
                    {generateMarkup(leftside)}
                </Grid>
                <Grid item xs={2} container direction = "column" justify="center">
                <Button
                    variant="contained" 
                    color="primary"
                    onClick={moveRight}><ArrowRight/>
                </Button> 
                <br/>
                <Button
                 variant="contained" 
                 color="primary"
                 onClick={moveLeft}><ArrowLeft/></Button>  
                </Grid>
                <Grid item xs={5}>
                    {generateMarkup(rightside)} 
                </Grid>
            </Grid>
        </div>
    );
}

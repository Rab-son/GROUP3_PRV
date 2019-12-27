/*github by Quawaniso Ngwira*/

/*Program rule variable component storage for all program rule variables with their associated programs */
import React , {Fragment} from 'react'
// mui imports
import {Grid, Paper, Typography, List, IconButton} from '@material-ui/core';
import {ListItem, ListItemText, ListItemSecondaryAction} from '@material-ui/core';
import { Edit , Delete } from '@material-ui/icons';


// description => source type

// custom styles for the two panes
const styles = {
    Paper : {padding: 20,
             marginTop: 5,  
             marginRight: 10, 
             marginLeft: 10, 
             height: 500, 
             overflowY: 'auto'}
}

export default ({
    programs,
    programrulevariables, 
    program,
    editMode,
    programrulevariable, 
    onSelect, 
    programrulevariable: {
        id, 
        title ='Program Rule Variable', 
        description = 'Click The Plus Icon Button On Top Right To Create A Program Rule',
        

    },
    onDelete,
    onEdit,
    onEditPrograms

    }) =>
    <Grid container>
        <Grid item sm>
            <Paper style= {styles.Paper}>
                {programrulevariables.map(([programNames,  programrulevariables]) =>
                !program || program === programNames
                ?<Fragment key={programNames}>
                <Typography
                    variant ="h6"
                    style = {{textTransform: 'uppercase'}}
                >
                    Program Name : {programNames}
                    </Typography>
                    <List component="ul">
                    { programrulevariables.map(({id, title}) =>
                        <ListItem key={id}
                            button
                            onClick={()=> onSelect(id)}
                            >
                            <ListItemText primary={title} />
                            <ListItemSecondaryAction>
                                 <IconButton 
                                    onClick={()=> onEdit(id)} 
                                >
                                    <Edit/>
                                </IconButton>
                                <IconButton 
                                    onClick={()=> onDelete(id)} 
                                >
                                    <Delete/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )}
                    </List>
                 </Fragment>
                :null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style= {styles.Paper}>
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    {title}
                </Typography>                
                {editMode
                ? <div
                    programrulevariable={programrulevariable}
                    programs={programs}
                    onSubmit={onEditPrograms}
                 />
                : 
                <Typography
                    variant="h6"
                >
                    {description}
                    <br/>
                </Typography>
                }
            </Paper>
        </Grid>
    </Grid>
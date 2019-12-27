import React, {Component} from 'react'
import {FormControl,InputLabel} from '@material-ui/core'
import { Select, MenuItem,TextField, Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import TransferVariable from './transfervariable';
import { ErrorSharp } from '@material-ui/icons';
import Api from '.../api';
//Dialog form styling 
const styles = theme => ({
    FormControl: {
        width: 450
    }
})

export default withStyles(styles)(class extends Component {
    state = this.getInitialState()
    // getting the initial state

    getInitialState(){
       const {programrulevariable} = this.props

       return programrulevariable ? programrulevariable : {
            title: '',
            description: '',
            programs: '',
            commodities: [],
       }
    }   

    componentWillReceiveProps({ programrulevariable }){
        this.setState({
            ...programrulevariable
        })
    }
     // form handler

    handleChange = name => ( { target: { value } }) => {
        this.setState({
                [name]: value
        })
    }

    // Submit function
    handleSubmit = () => {
        // Validate

        this.props.onSubmit({
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
            ...this.state,

        })

        // clearing the state
        this.setState(this.getInitialState())

    }

     getDataFromDhis2 = () => {
        Api.getDataElementsThatStartsWith('Commodities')
            .then(data => {
                this.setCommodities(data.dataElements);
            })
            .catch(error => {
                console.error('Error during data retrieval:', error);
            });
    };

     setCommodities = commodities => {
        this.setState({
            commodities,
        });
    };


    render() {
        const {title, programs, commodities} = this.state,
              {classes, programrulevariable ,programs: programNames} = this.props
        return <form>
        <FormControl className={classes.FormControl}>
                <InputLabel>Program</InputLabel>
                <Select
                    float = "center"
                    style = {{width: '130%'}}
                    value={commodities}
                    onChange={this.handleChange('commodities')}
                >   {commodities.map(programName => 
                        <MenuItem key={programName.id} value={commodities}>
                            {commodities}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
            <br/>
            <TextField 
                style = {{width: '45%'}}
                align="center" 
                label="Name"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                className={classes.FormControl}
            />
            <br/>
            <TransferVariable/>
            <br/>

                <Button 
                variant="contained" 
                color="primary"
                style = {{margin: 50, marginRight: 50, float: "right"}}
                onClick={this.handleSubmit}
                >
                    {programrulevariable ? ' Edit ':  'Create'}
                </Button>  
        </form>
        
    }
})
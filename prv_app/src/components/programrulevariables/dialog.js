/*This file containes a dialog box which will contain the form that a user will fill in in order
    to create a program rule variable
*/
import React , {Component , Fragment} from 'react';
// MUI imports
import {Dialog} from '@material-ui/core';
import {DialogContent, DialogTitle} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Add from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import Form from './form'

export default class extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleFormSubmit = programrulevariable => {
        this.handleToggle()
        this.props.onCreate(programrulevariable)

    } 

    render() {
        const {open} = this.state,
              {programs} = this.props

        return <Fragment>
        <Fab onClick = {this.handleToggle}>
            <Add/>
        </Fab>
        <Dialog
            fullScreen
            open={open}
            onClose={this.handleToggle}
        >
        <AppBar position ="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{flex: '1'}}>
                Create A Program Rule Variable
            </Typography>
            <Fab onClick = {this.handleToggle}>
                <CloseIcon/>
            </Fab>
          </Toolbar>
        </AppBar>
        <br/>
        <DialogTitle align="center">
            Create A Program Rule Variable
        </DialogTitle>
        <DialogContent fullScreen>
                <Form 
                    programs={programs}
                    onSubmit={this.handleFormSubmit}
                />
            </DialogContent>
        </Dialog>
    </Fragment>
    }
}

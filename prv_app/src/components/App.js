// components and layouts imports
import React, {Component, Fragment} from 'react';
import Header from './layouts/header'; 
import Footer from './layouts/footer';
import ProgramRuleVariable from './programrulevariables';
import {programs, programrulevariables } from '../programstore.js';
import CssBaseline from '@material-ui/core/CssBaseline';


// class extension via component
export default class extends Component {
  // states for changing the program rule variables
  state = {
    programrulevariables,
    programrulevariable: {}
  }
  
  getProgramRuleVariablesByPrograms() {
    const initProgramRuleVariables = programs.reduce((programrulevariables, program) => ({
      ...programrulevariables,
      [program]: []
    }), {})

    return Object.entries(
    this.state.programrulevariables.reduce((programrulevariables,programrulevariable) => {
      const {programs} = programrulevariable

      programrulevariables[programs] = [ ...programrulevariables[programs], programrulevariable]
      
      return programrulevariables
    }, initProgramRuleVariables) 
    )
  }

  handleProgramSelect = program => {
    this.setState({
        program
    })
  }

  handleProgramRuleVariableSelect = id => {
    this.setState(({programrulevariables}) => ({
      programrulevariable : programrulevariables.find(prv => prv.id === id),
      editMode: false
    }))
  }
//  
  handleProgramRuleVariablesCreate = programrulevariable => {
    this.setState(({programrulevariables}) => ({
      programrulevariables: [
        ...programrulevariables,
        programrulevariable
      ]
    }))
  }
// deleting the prv
handleProgramRuleVariableDelete = id => {
  this.setState(({programrulevariables, programrulevariable, editMode}) => ({
    programrulevariables: programrulevariables.filter(prv => prv.id !== id),
    editMode: programrulevariable.id === id ? false : editMode,
    programrulevariable: programrulevariable.id === id ? {} : programrulevariable
    
  }))
}
// editing prv
handleProgramRuleVariableEdit = id => {
  this.setState(({programrulevariables}) => ({
    programrulevariable : programrulevariables.find(prv => prv.id === id),
    editMode: true
  }))  
}

//
handleProgramRuleVariableEditPrograms = programrulevariable => {
  this.setState(({ programrulevariables }) => ({
    programrulevariables: [
      ...programrulevariables.filter(prv => prv.id !== programrulevariable.id),
      programrulevariable
    ],
      programrulevariable

  }))
}

  render() {
    // get the program variables from the () method
    const programrulevariables = this.getProgramRuleVariablesByPrograms(),
    { program, programrulevariable, editMode } = this.state

    // outer wrapper for the elements
    return <Fragment>
        <CssBaseline/>
        <Header
          programs={programs}
          onProgramRuleVariablesCreate={this.handleProgramRuleVariablesCreate}
        />
        <ProgramRuleVariable
            programrulevariable = {programrulevariable}
            program={program}
            programrulevariables={programrulevariables}
            editMode={editMode}
            programs={programs}
            onSelect={this.handleProgramRuleVariableSelect}
            onDelete={this.handleProgramRuleVariableDelete}
            onEdit ={this.handleProgramRuleVariableEdit}
            onEditPrograms={this.handleProgramRuleVariableEditPrograms}
        />
          <Footer
          program={program}// Program navigation on footer
          programs={programs}
          onSelect={this.handleProgramSelect}
        />
    </Fragment>
  }
}
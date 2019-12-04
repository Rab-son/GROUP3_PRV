// components imports
import React, { Component, Fragment } from 'react'
import Header from './layouts/header';
import Footer from './layouts/footer';
import ProgramRuleVariable from './programrulevariables'
// anonymous class
export default class extends Component {
    render() {
        // Wrapper for the elements
        return <Fragment>
            <Header/>
            <ProgramRuleVariable/>
            <Footer/>
        </Fragment>
    }
}

import React, { Component } from 'react';
import logo from '../logo.png';
import Api from '../api';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commodities: [],
        };
    }

    getDataFromDhis2 = () => {
        Api.getProgramRuleVariablesThatStartsWith()
            .then(data => {
                this.setCommodities(data.programRuleVariables);
            })
            .catch(error => {
                console.error('Error during data retrieval:', error);
            });
    };


    postDataToDhis2 = () => {
        const programRuleVariable = {
            name: 'Commodities - Tran',
            shortName: 'Commodities - Tran',
            valueType: 'NUMBER',
            aggregationType: 'SUM',
            domainType: 'AGGREGATE',
            description: 'Current supply of tran',
        };

        Api.postProgramRuleVariable(programRuleVariable).then(() => {
            this.getDataFromDhis2();
        });
    };

    deleteDataFromDhis2 = () => {
        const tranCommodity = this.state.commodities.find(
            programRuleVariable =>programRuleVariable.id
        );

        if (tranCommodity) {
            Api.deleteProgramRuleVariable(tranCommodity.id)
                .then(() => {
                    this.getDataFromDhis2();
                })
                .catch(error => {
                    console.error('Error during data retrieval:', error);
                });
        }
    };

    setCommodities = commodities => {
        this.setState({
            commodities,
        });
    };

    render() {
        return (

            <div className="app">
                <header className="app-header">
                    <span>DHIS2 PROGRAM RULE VARIABLE API </span>
                    <div>The app gets and delete ProgramRuleVariables from DHIS2 Server  </div>

                </header>
                <main>
                    <div className="content">
                        <div className="buttons">
                            <button onClick={this.getDataFromDhis2}>
                                Get data
                            </button>
                            <button onClick={this.postDataToDhis2}>
                                Post 
                            </button>
                            <button onClick={this.deleteDataFromDhis2}>
                                Delete
                            </button>
                        </div>

                        {/* Render commodities, one by one */}
                        {this.state.commodities.map(item => (
                            <p key={item.id}>
                                <code>{item.displayName}</code>
                            </p>
                        ))}
                    </div>
                </main>
            </div>
        );
    }
}

export default App;

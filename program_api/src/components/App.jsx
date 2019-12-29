import React, { Component, Fragment } from 'react'
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
        Api.getProgramThatStartsWith('Commodities')
            .then(data => {
                this.setCommodities(data.programs);
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
        return <Fragment>
                <header className="app-header">
                    <span>This application gets programs from DHIS2 </span>
                </header>
                <main>
                    <div className="content">
                        <div className="buttons">
                          <select onSelect= {this.getDataFromDhis2()} className="buttons">

                                {this.state.commodities.map(item => (
                            <option key={item.id}>
                                {item.displayName}
                            </option>
                            ))}
                            </select>
                           
                          
                        </div>
                           
                        
                    </div>
                </main>
        
        </Fragment>
    }
}

export default App;

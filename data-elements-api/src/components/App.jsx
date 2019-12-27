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
       
        Api.getDataElementsThatStartsWith("Ma")
            .then(data => {
                this.setCommodities(data.dataElements);
            })
            .catch(error => {
                console.error('Error during data retrieval:', error);
            });
    };

    

    deleteDataFromDhis2 = () => {
        const tranCommodity = this.state.commodities.find(
            dataElement => dataElement.id
        );

        if (tranCommodity) {
            Api.deleteDataElement(tranCommodity.id)
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
                
                    <span>PRV API APP</span>
                    <div>This app tries to get dataElements from the API</div>
                </header>


                <main>
                    <div className="content">
                    

                    
                        <div className="buttons">
                            <button onClick={this.getDataFromDhis2}>
                                Get dataElements
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

import React, { Component } from 'react';
import CountryTable from "./CountryTable";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { countries: [], labels: [] }
  }

  componentDidMount() {
    const factory = this.props.factory;
    //factory.getCountries(this.countriesUpdater);
    factory.getCountriesCont(3000, this.countriesUpdater);
    factory.getLabels(this.labelsUpdater);
  }

  componentWillUnmount(){
    this.props.factory.stopIntervalFectching();
  }

  countriesUpdater = data => {
    this.setState({ countries: data });
  }

  labelsUpdater = data => {
    this.setState({ labels: data });
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch and Mobx</h2>
        </div>
        <div className="App-intro">
          <p>Your initial task is to fetch data from the server (see exercise for how to start it),
           and create a table below, with these data</p>
          <CountryTable countries={this.state.countries} labels={this.state.labels} />
        </div>
      </div>
    );
  }
}

export default App;

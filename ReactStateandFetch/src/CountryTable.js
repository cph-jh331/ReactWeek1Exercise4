import React, { Component } from "react";

class CountryTable extends Component {

  labelRow = () => this.props.labels.map(label => <th key={label}>{label}</th>);

  countryRows = () =>
    this.props.countries.map(country =>
      <tr key={country.name}>
        <td>{country.name}</td>
        <td>{country.capital}</td>
        <td>{country.region}</td>
        <td>{country.population}</td>
        <td>{country.area}</td>
        {this.moreThanOne(country.timezones)}
        {this.moreThanOne(country.borders)}
        {this.moreThanOne(country.topLevelDomain)}
        {this.moreThanOne(country.currencies)}
        {this.moreThanOne(country.languages)}
      </tr>
    );

  moreThanOne = array => {
    if (array.length > 1) {
      return <td>{array[0] + " (+" + (array.length - 1) + ")"}</td>
    }
    return <td>{array[0]}</td>
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>{this.labelRow()}</tr>
        </thead>

        <tbody>
          {this.countryRows()}
        </tbody>
      </table>
    );
  }
}
export default CountryTable;
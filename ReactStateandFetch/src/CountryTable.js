import React, { Component } from "react";

class CountryTable extends Component {

  labelRow = () =>
    this.props.labels.map(label => <th key={label}>{label}</th>);

  countryRows = () =>
    this.props.countries.map(country =>
      <tr key={country.name}>
        <td>{country.name}</td>
        <td>{country.capital}</td>
        <td>{country.region}</td>
        <td>{country.population}</td>
        <td>{country.area}</td>
        <td>{country.timezones.join(",\n")}</td>
        <td>{country.borders.join(",\n")}</td>
        <td>{country.topLevelDomain.join(",\n")}</td>
        <td>{country.currencies.join(",\n")}</td>
        <td>{country.languages.join(",\n")}</td>
      </tr>
    );

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
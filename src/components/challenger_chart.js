import React from "react";
import challenger_data from "/Users/jake/GitHub/tft-project/src/data/updated_challenger_info.json";

class ChallengerInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      challengerData: challenger_data,
      currentPage: 0,
      pageSize: 25
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  paginateData(size, number) {
    const startIndex = size * number;
    const endIndex = startIndex + size;

    return this.state.challengerData.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.state.currentPage < 7) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  }

  previousPage() {
    if (this.state.currentPage > 0) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Summoner Name</th>
              <th>LP</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Win Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.paginateData(this.state.pageSize, this.state.currentPage).map(
              function(playerInfo) {
                const {
                  Summoner_Name,
                  LP,
                  Wins,
                  Losses,
                  Win_Rate
                } = playerInfo;
                return (
                  <tr key={Summoner_Name}>
                    <td>{Summoner_Name}</td>
                    <td>{LP}</td>
                    <td>{Wins}</td>
                    <td>{Losses}</td>
                    <td>{Win_Rate}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        <button onClick={this.nextPage}>Next Page</button>
        <button onClick={this.previousPage}>Previous Page</button>
      </div>
    );
  }
}

export default ChallengerInfo;

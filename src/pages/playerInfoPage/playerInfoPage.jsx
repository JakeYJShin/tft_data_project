import React from "react";

// Component Imports

import PlayerInfo from "../../components/playerExpandedInfo/playerExpandedInfo";

// Data Imports

import challengerData from "../../data/updatedChallengerInfo.json";
import matchData from "../../data/matchMasterSheet.json";

class PlayerInfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      challengerData: challengerData,
      matchData: matchData
    };
  }

  getSummonerPUUIDByName(name) {
    return this.state.challengerData.find(function(summoner) {
      if (summoner.Summoner_Name === name) {
        return true;
      } else return false;
    }).PUUID;
  }

  render() {
    const { challengerData, matchData } = this.state;
    return (
      <div>
        <PlayerInfo
          puuid={this.getSummonerPUUIDByName(
            this.props.match.params.summoner_name
          )}
          challengerData={challengerData}
          matchData={matchData}
        />
      </div>
    );
  }
}

export default PlayerInfoPage;

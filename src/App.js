import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Component imports

import ChallengerInfo from "./components/challengerChart/challengerChart";

import PlayerInfo from "./components/playerExpandedInfo/playerExpandedInfo";

// Data imports

import challengerData from "./data/updatedChallengerInfo.json";
import matchData from "./data/matchMasterSheet.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      challengerData: challengerData,
      matchData: matchData
    };
  }

  render() {
    const { challengerData, matchData } = this.state;
    return (
      // <div><ChallengerInfo challengerData={challengerData} /></div>
      <div>
        <PlayerInfo
          puuid={matchData[0].PUUID}
          challengerData={challengerData}
          matchData={matchData}
        />
      </div>
    );
  }
}

export default App;

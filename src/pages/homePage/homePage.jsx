import React from "react";

// Data Imports
import challengerData from "../../data/updatedChallengerInfo.json";

// Component Imports

import ChallengerChart from "../../components/challengerChart/challengerChart";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      challengerData: challengerData,
      selectedPlayer: ""
    };
  }

  render() {
    const { challengerData } = this.state;
    return (
      <div>
        <ChallengerChart challengerData={challengerData} />
      </div>
    );
  }
}

export default HomePage;

import React from "react";

function PlayerInfo(props) {
  return (
    <div>
      <div>
        <h4>{getPlayerName(props)}</h4>
      </div>
      <div>
        {getPlayerHistory(props).map(
          ({ Match_ID, Placement, Champions, Traits }, idx) => (
            <div key={idx}>
              <div>
                {/* <h4>{Match_ID}</h4> */}
                <h4>Placement</h4>
                <h4>{Placement}</h4>
                <h4>Champions</h4>
                <h4>{loopThroughChampions(Champions)}</h4>
                {/* <h4>{Traits}</h4> */}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function getPlayerName(props) {
  for (var i = 0; i < props.challengerData.length; i++) {
    if (props.challengerData[i].PUUID === props.puuid) {
      return props.challengerData[i].Summoner_Name;
    }
  }
}

function getPlayerHistory(props) {
  return props.matchData.filter(function(playerInfo) {
    if (playerInfo.PUUID === props.puuid) {
      return true;
    } else {
      return false;
    }
  });
}

function loopThroughChampions(champlist) {
  var asdf = "";

  for (let champobj of champlist) {
    asdf = asdf.concat(JSON.stringify(champobj));
  }

  return asdf;
}

export default PlayerInfo;

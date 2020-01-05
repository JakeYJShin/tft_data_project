import React from "react";

function PlayerInfo(props) {
  function getPlayerName(puuid) {
    for (var i = 0; i < props.challengerData.length; i++) {
      if (props.challengerData[i].PUUID === puuid) {
        return props.challengerData[i].Summoner_Name;
      }
    }
  }

  function getPlayerHistory(puuid) {
    return props.matchData.filter(function(playerInfo) {
      if (playerInfo.PUUID === puuid) {
        return true;
      } else {
        return false;
      }
    });
  }

  return (
    <div>
      <div>
        {getPlayerHistory(props.puuid).map(({ PUUID, Match_ID }, idx) => (
          <div key={idx}>
            <div>
              <h4>{getPlayerName(PUUID)}</h4>
              <h4>{Match_ID}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PlayerInfo;

import React from "react";

function PlayerInfo(props) {
  console.log(props);
  function retrievePlayerName(puuid) {
    for (var i = 0; i < props.challengerData.length; i++) {
      if (props.challengerData[i].PUUID == puuid) {
        return props.challengerData[i].Summoner_Name;
      }
    }
  }

  function retrievePlayerHistory(puuid) {
    return props.matchData.filter(function(playerInfo) {
      if (playerInfo.PUUID == puuid) {
        return true;
      } else {
        return false;
      }
    });
  }

  return (
    <div>
      <div>
        {retrievePlayerHistory(props.puuid).map(({ PUUID, Match_ID }) => (
          <div>
            <div>
              <h4>{retrievePlayerName(PUUID)}</h4>
              <h4>{Match_ID}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PlayerInfo;

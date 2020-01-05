import React from "react";
import ChampionImage from "./historyChampionImage";

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
                <h4>{Match_ID}</h4>
                <h4>Placement: {Placement}</h4>
                <h4>Champions</h4>
                <h4>{renderChampionImage(Champions)}</h4>
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

function sortChampionByTier(champlistarr) {
  var temp = champlistarr.sort(function(champ1, champ2) {
    return champ1.Tier - champ2.Tier;
  });

  return temp;
}

function renderChampionImage(champlist) {
  sortChampionByTier(champlist);

  var temp = [];

  for (let champobj of champlist) {
    temp.push(<ChampionImage champion={champobj.Name} />);
  }

  return temp;
}

export default PlayerInfo;

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "../store";
import { generatePlayers } from "../features/randomSlice";
import { Table } from "antd";
function PlayersContainer() {
  const { players, newArray } = useSelector((store: RootState) => store.players);
  const dispatch: AppDispatch = useDispatch();

  const columnSanta = [
    {
      title: "Santa",
      dataIndex: "santa",
      key: "santa",
    }
  ]

  const staticNames = players.map((player) => ({
    ...player,
    key: player.id,
  }));

  return (
    <div style={{ display: "flex",  }}>
      <h1>Players</h1>
      {/* <div style={{ display: "flex", flexFlow: "column" }}>
        {players.map((player) => (
          <div key={player.id}>
            <p>{player.name}</p>
          </div>
        ))}
      </div> */}
      <div>
        <Table columns={columnSanta} dataSource={staticNames}/>
      </div>
      <div style={{ display: "flex", flexFlow: "column", gap: ".01rem" }}>
        {Object.entries(newArray).map(([playerId, playerName]) => (
          <div key={playerId}>
            <p>{playerName}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(generatePlayers())}>Gen</button>
      </div>
    </div>
  );
}

export default PlayersContainer;

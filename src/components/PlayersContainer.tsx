import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "../store";
import { generatePlayers } from "../features/randomSlice";

function PlayersContainer() {
  const { players, newArray } = useSelector((store: RootState) => store.players);
  const dispatch: AppDispatch = useDispatch();

    // const columns = {
    //     title: "Santa"
    //     dataIndex: "santa"
    //     key
    // }
// const aaa = useSelector(store => store);
// console.log(aaa, 'aaa');
const handlePlayers = () => {
    dispatch(generatePlayers());
}

  return (
    <div style={{ display: "flex" }}>
      <h1>Players Container</h1>
      <div style={{ display: "flex", flexFlow: "column" }}>
        {players.map((player) => (
          <div key={player.id}>
            <p>{player.name}</p>
          </div>
        ))}
      </div>
      {/* <div style={{ display: "flex", flexFlow: "column" }}>
        {newArray.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div> */}
       <ul>
        {Object.entries(newArray).map(([playerId, playerName]) => (
          <li key={playerId}>
            {playerId}: {playerName}
          </li>
        ))}
      </ul>
      <div>
        {/* <button onClick={() => dispatch(generatePlayers())}>Gen</button> */}
        <button onClick={handlePlayers}>Gen</button>
        
      </div>
    </div>
  );
}

export default PlayersContainer;

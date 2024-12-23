import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { generatePlayers } from "../features/randomSlice";
import { useState } from "react";

function PlayersContainer() {
  const { players, newArray } = useSelector((store: RootState) => store.players);
  const dispatch: AppDispatch = useDispatch();  

//   const [isClicked, setIsClicked] = useState(false);
//   const hanndleGeneratePlayers = () => {
//       setIsClicked(false);
//       dispatch(generatePlayers())
//       setIsClicked(true);
// };

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
      <div style={{ display: "flex", flexFlow: "column" }}>
        {newArray.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
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

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { generatePlayers } from "../features/randomSlice";

function PlayersContainer() {
  const {leftPartPLayersArray, rightPartPlayersArray, players } = useSelector((store: RootState) => store.players);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <h1>Players Container</h1>
      {players.map((player) => (
        <div key={player.id}>
          <p>{player.id}</p>
          <p>{player.name}</p>
        </div>
      ))}
      <div style={{display: "flex"}}>
      {leftPartPLayersArray.map((leftPartPLayerArray) => (
        <div key={leftPartPLayerArray.id}>
          {/* <p>{leftPartPLayerArray.id}</p> */}
          <p>{leftPartPLayerArray.name}</p>
        </div>
      ))}
      {
        rightPartPlayersArray.map((rightPartPlayerArray) => (
            <div key={rightPartPlayerArray.id}>
                {/* <p>{rightPartPlayerArray.id}</p> */}
                <p>{rightPartPlayerArray.name}</p>
            </div>
        ))
      }
      </div>

      <button onClick={() => dispatch(generatePlayers()) }>Click</button>
    </div>
  );
}

export default PlayersContainer;

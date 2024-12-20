import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
  id: number;
  name: string;
}

interface Players {
  players: Player[];
  leftPartPLayersArray: Player[];
  rightPartPlayersArray: Player[];
}

const initialState: Players = {
  players: [
    { id: 100, name: "John" },
    { id: 101, name: "Jan" },
    { id: 102, name: "Michal" },
    { id: 103, name: "Mela" },
    { id: 104, name: "Anna" },
    { id: 105, name: "Bella" },
  ],
  leftPartPLayersArray: [],
  rightPartPlayersArray: [],
};

const playersReducer = createSlice({
  name: "players",
  initialState,
  reducers: {
    generatePlayers: (state) => {
      if (state.players.length % 2 === 0) {
        const halfedPlayersVar = state.players.length / 2;

        const forLeft = [...state.players];
        const leftPartPlayers = forLeft.splice(0, halfedPlayersVar);
        console.log(leftPartPlayers);
        console.log(
          leftPartPlayers.forEach((rightPartPlayer) => console.log(rightPartPlayer.name))
        );
        const leftPartPLayersArray = leftPartPlayers.forEach((leftPartPLayerArray) => {
            return (
                leftPartPLayerArray.name
            )
      });

        // console.log(leftPartPlayers.length);
        const forRight = [...state.players];
        const rightPartPlayers = forRight.splice(halfedPlayersVar);
        console.log(rightPartPlayers);
        console.log(
          rightPartPlayers.forEach((rightPartPlayer) => console.log(rightPartPlayer.name))
        );
        const rightPartPlayersArray = rightPartPlayers;
        // copiedPlayers.length = halfedPlayersVar;
        // console.log(copiedPlayers.length);
      } else {
        console.log("odd");
        console.log("Odd:", state.players.length);
      }
    },
  },
});

export const { generatePlayers } = playersReducer.actions;
export default playersReducer.reducer;

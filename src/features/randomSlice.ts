import { createSlice } from "@reduxjs/toolkit";

interface Player {
  id: string;
  name: string;
}

interface Players {
  players: Player[];
  newArray: { [key: string]: Player };
  // newArray: Player[];
}

const initialState: Players = {
  players: [
    { id: "100", name: "AAAA" },
    { id: "101", name: "Bbbb" },
    { id: "102", name: "Cccc" },
    { id: "103", name: "Dddd" },
    { id: "104", name: "Eeee" },
    { id: "105", name: "Ffff" },
    { id: "106", name: "Gggg" },
  ],
  newArray: {},
};

const playersReducer = createSlice({
  name: "random",
  initialState,
  reducers: {
    generatePlayers: (state) => {
      // const copiedPlayers = JSON.parse(JSON.stringify(state.players));
      // const newArray:any[]= [];
      const assignedPlayers: { [key: string]: Player } = {};
      state.players.forEach((player) => {
        let pickedPlayerIndex;
        let pickedPlayer;
        do {
          pickedPlayerIndex = Math.floor(Math.random() * state.players.length);
          pickedPlayer = state.players[pickedPlayerIndex];
          console.log(1);
          // console.log(assignedPlayers);
        } while (pickedPlayer.id === player.id);
        // state.players.splice(pickedPlayerIndex, 1);
        assignedPlayers[player.id] = pickedPlayer.name;
        console.log(2);
        // console.log(assignedPlayers);
        // assignedPlayers.name = "name";
        // newArray.push(pickedPlayer);
        state.players.splice(pickedPlayerIndex, 1);
      });
      // console.log(newArray,'newArray');
      console.log("Assigned Players:", assignedPlayers);
    console.log("Remaining Players:", state.players);
      state.newArray = assignedPlayers;
      // return assignedPlayers;
    },
  },
});

export const { generatePlayers } = playersReducer.actions;
export default playersReducer.reducer;

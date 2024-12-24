import { createSlice } from "@reduxjs/toolkit";

interface Player {
  id: string;
  name: string;
}

interface Players {
  players: Player[];
  newArray: { [key: string]: Player };
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
      const shuffleArray = (array: Player[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      let availablePlayers = [...state.players];
      let assignedPlayers: { [key: string]: string } = {};
      let valid = false;
      while (!valid) {
        availablePlayers = shuffleArray([...state.players]);
        valid = state.players.every((player, index) => player.id !== availablePlayers[index].id);
      }
      state.players.forEach((player, index) => {
        assignedPlayers[player.id] = availablePlayers[index].name;
      });

      state.newArray = assignedPlayers;
    },
  },
});

export const { generatePlayers } = playersReducer.actions;
export default playersReducer.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { WritableDraft } from '@reduxjs/toolkit';

interface Player {
  id: number;
  name: string;
}

interface Players {
  players: Player[];
  newArray: Player[];
}

const initialState: Players = {
  players: [
    { id: 100, name: "AAAA" },
    { id: 101, name: "Bbbb" },
    { id: 102, name: "Cccc" },
    { id: 103, name: "Dddd" },
    { id: 104, name: "Eee" },
    // { id: 105, name: "Ffff" },
    // { id: 106, name: "Gggg" },
    // { id: 107, name: "Hhhhh" },
    // { id: 108, name: "Iiiiis" },
  ],
  newArray: [],
};

const playersReducer = createSlice({
  name: "players",
  initialState,
  reducers: {
    generatePlayers: (state) => {
      const copiedPlayers = [...state.players];

      state.newArray = [];

      state.players.forEach((player) => {
        let pickedPlayerIndex;
        let pickedPlayer;
        do {
          pickedPlayerIndex = Math.floor(Math.random() * copiedPlayers.length);
          pickedPlayer = copiedPlayers[pickedPlayerIndex];
        } while (pickedPlayer === player);
        state.newArray.push(pickedPlayer);
        copiedPlayers.splice(pickedPlayerIndex, 1);
      });
    },
  },
});

export const { generatePlayers } = playersReducer.actions;
export default playersReducer.reducer;

// {
//   ...state,
//   newArray: assignments,
// };

//     const copiedPlayers = [...state.players];
//     // if(copiedPlayers.length > 0) {
//     // copiedPlayers.forEach((player) => {
//     while (copiedPlayers.length > 0) {
//       let pickedPlayerIndex = Math.floor(Math.random()) * copiedPlayers.length;
//       if (copiedPlayers.length > 0 && player === copiedPlayers[pickedPlayerIndex]) {
//         const playerGet = copiedPlayers.splice(pickedPlayerIndex, 1);
//         state.newArray.push(playerGet);
//       }
//     }
//   }
//     // }
// )

// while (copiedPlayers.length > 0) {
//   const pickedPlayerIndex = Math.floor(Math.random() * copiedPlayers.length);
//   if(copiedPlayers[pickedPlayerIndex] === player){
//     const pickedPlayer = copiedPlayers.splice(pickedPlayerIndex, 1)[0];
//     state.newArray.push(pickedPlayer);
//   }
//   // const pickedPlayer = copiedPlayers[pickedPlayerIndex];
//   // state.newArray.push(pickedPlayer);
// }
// // return state.newArray;

// }

// const gen = () => {
//   if (state.players.length !== 0) {
//     state.players.forEach(() => {
//       const player = Math.floor(Math.random() * state.players.length);
//       const takenPlayer = state.players[player];
//       const alreadyExists = state.newArray.some(
//         (existingPlayer) => existingPlayer.id === takenPlayer.id
//       );
//       const playersCheckIndex = state.players.findIndex(
//         (ifSamePlayer) => ifSamePlayer.id === takenPlayer.id
//       );
//       const newArrayCheckIndex = state.newArray.findIndex(
//         (ifSamePlayer) => ifSamePlayer.id === takenPlayer.id
//       );
//       if (
//         !alreadyExists &&
//         newArrayCheckIndex === -1 &&
//         state.newArray.length !== playersCheckIndex
//       ) {
//         state.newArray.push(takenPlayer);
//       }
//       if (state.newArray.length < state.players.length) {
//         gen();
//       }
//     });
//   }
// };
// gen();

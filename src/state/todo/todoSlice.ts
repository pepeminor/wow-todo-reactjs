import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  title: string;
  desc: string;
  isDone: boolean;
}

const initialState = [] as ITodo[];

const totoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<ITodo>) => {
      if (!state) return;
      state.push(action.payload);
    },
    editTodo: (state, action: PayloadAction<ITodo>) => {
      const index = state.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteTodo: (state, action: PayloadAction<ITodo>) => {
      const index = state.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const todoActions = totoSlice.actions;
export const todoReducer = totoSlice.reducer;

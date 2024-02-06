import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const SORT_STATUS_TODO = {
  ALL: "all",
  COMPLETE: "complete",
  PENDING: "pending",
};

const initialState = SORT_STATUS_TODO.ALL;

const sortBySlice = createSlice({
  name: "sortBySlice",
  initialState,
  reducers: {
    changeSortBy: (
      _,
      action: PayloadAction<
        | typeof SORT_STATUS_TODO.ALL
        | typeof SORT_STATUS_TODO.COMPLETE
        | typeof SORT_STATUS_TODO.PENDING
      >,
    ) => {
      return action.payload;
    },
  },
});

export const sortByActions = sortBySlice.actions;
export const sortByReducer = sortBySlice.reducer;

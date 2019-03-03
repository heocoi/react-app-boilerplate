import { createSlice } from "redux-starter-kit";

const counterSlice = createSlice({
  slice: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 1;
    },
    add(state, action) {
      const { volume } = action.payload;
      return state + volume;
    }
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = counterSlice;

// Extract and export each action creator by name
export const { increment, add } = actions;

// Export the reducer, either as a default or named export
export default reducer;

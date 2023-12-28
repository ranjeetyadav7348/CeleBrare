import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: 'Editable Heading ',
  size: '24px',
  color: '#FFFFFF',
  history: [],
  future: [],
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText: (state, action) => {
      return { ...state, text: action.payload, history: [...state.history, state] };
    },
    setSize: (state, action) => {
      return { ...state, size: action.payload, history: [...state.history, state] };
    },
    setColor: (state, action) => {
      return { ...state, color: action.payload, history: [...state.history, state] };
    },
    undo: (state) => {
      if (state.history.length > 0) {
        const previousState = state.history[state.history.length - 1];
        const newHistory = state.history.slice(0, -1);
        return { ...previousState, history: newHistory };
      }
      return state;
    },
    redo: (state) => {
      if (state.future.length > 0) {
        const nextState = state.future[0];
        const newFuture = state.future.slice(1);
        return { ...nextState, future: newFuture, history: [...state.history, state] };
      }
      return state;
    },
  },
});

export const { setText, setSize, setColor, undo, redo } = textSlice.actions;
export default textSlice.reducer;

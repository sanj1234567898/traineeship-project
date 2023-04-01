import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INote } from "@/types/data";

interface INoteState {
  items: INote[];
}

interface IAddNote {
  text: string;
  tags: Array<string>;
}

interface IChangeNote {
  id: number;
  text: string;
  tags: Array<string>;
}

const initialState: INoteState = {
  items: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<IAddNote>) {
      state.items.unshift({
        id: +new Date(),
        text: action.payload.text,
        tags: action.payload.tags,
      });
    },

    changeNote(state, action: PayloadAction<IChangeNote>) {
      const note = state.items.find((note) => note.id === action.payload.id);

      if (note) {
        note.text = action.payload.text;
        note.tags = action.payload.tags;
      }
    },

    removeNote(state, action: PayloadAction<number>) {
      state.items = state.items.filter((note) => note.id !== action.payload);
    },
  },
});

export const { removeNote, addNote, changeNote } = notesSlice.actions;

export default notesSlice.reducer;

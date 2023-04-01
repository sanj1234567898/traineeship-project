import React from "react";
import NoteItem from "./NoteItem";
import { INote } from "@/types/data";

interface INoteListProps {
  notes: INote[];
  flatFiltredNotes: INote[];
  activeTags: Array<string>;
  setActiveTag: React.Dispatch<React.SetStateAction<string[]>>;
}

const NotesList: React.FC<INoteListProps> = ({
  notes,
  flatFiltredNotes,
  activeTags,
  setActiveTag,
}) => {
  return (
    <div className="note-list">
      {flatFiltredNotes.length > 0
        ? flatFiltredNotes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
              setActiveTag={setActiveTag}
              activeTags={activeTags}
            />
          ))
        : notes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
              setActiveTag={setActiveTag}
              activeTags={activeTags}
            />
          ))}
    </div>
  );
};

export default NotesList;

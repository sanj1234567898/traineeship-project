import React from "react";
import NoteItem from "./NoteItem";
import { INote } from "@/types/data";

interface INoteListProps {
  notes: INote[];
  flatFiltredNotes: INote[];
}

const NotesList: React.FC<INoteListProps> = ({ notes, flatFiltredNotes }) => {
  return (
    <div className="note-list">
      {flatFiltredNotes.length > 0
        ? flatFiltredNotes.map((note) => <NoteItem key={note.id} {...note} />)
        : notes.map((note) => <NoteItem key={note.id} {...note} />)}
    </div>
  );
};

export default NotesList;

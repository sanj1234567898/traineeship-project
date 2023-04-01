import React from "react";
import NoteItem from "./NoteItem";
import { useAppSelector } from "../redux/hook";

const NotesList: React.FC = () => {
  const notes = useAppSelector((state) => state.notes.items);

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NotesList;

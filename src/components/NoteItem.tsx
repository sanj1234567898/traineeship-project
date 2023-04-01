import { useAppDispatch } from "@/redux/hook";
import { removeNote } from "@/redux/slices/notesSlice";
import { INote } from "@/types/data";
import React from "react";

interface INoteItemProps extends INote {}

const NoteItem: React.FC<INoteItemProps> = ({ id, text, tags }) => {
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <div>
        <p>{text}</p>

        {tags && (
          <ul>
            {tags.map((tag, id) => (
              <li key={id}>
                <p>{tag}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={() => {}}>Edit</button>
      <button
        onClick={() => {
          dispatch(removeNote(id));
        }}
      >
        X
      </button>
    </div>
  );
};

export default NoteItem;

import React from "react";
import { useAppDispatch } from "@/redux/hook";
import { changeNote, removeNote } from "@/redux/slices/notesSlice";
import { INote } from "@/types/data";
import { validationTags } from "@/utils/validationTags";
import HighlightWithinTextarea from "react-highlight-within-textarea";

interface INoteItemProps extends INote {}

const NoteItem: React.FC<INoteItemProps> = ({ id, text, tags }) => {
  const [changeText, setChangeText] = React.useState<string>(text);
  const [editActive, setEditActive] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  const changeTags = validationTags(changeText);

  const handleChangeNote = () => {
    if (!changeText) return alert("Поле не может быть пустым!");

    dispatch(
      changeNote({
        id,
        text: changeText,
        tags: changeTags,
      })
    );

    setEditActive(!editActive);
  };

  // const handleChangeNoteOnKeyDown: React.KeyboardEventHandler<
  //   HTMLTextAreaElement
  // > = (e) => {
  //   e.key === "Enter" ? handleChangeNote() : null;
  // };

  const onChange = (changeText: string) => setChangeText(changeText);

  return (
    <div>
      <div className="textarea">
        <HighlightWithinTextarea
          value={changeText}
          onChange={onChange}
          highlight="#I"
        />
      </div>
      {editActive && editActive ? (
        <div className="textarea">
          <HighlightWithinTextarea
            value={changeText}
            onChange={onChange}
            highlight="#I"
          />
        </div>
      ) : (
        // <textarea
        //   name=""
        //   id=""
        //   onChange={(e) => setChangeText(e.target.value)}
        //   value={changeText}
        //   cols={30}
        //   rows={10}
        //   onKeyDown={handleChangeNoteOnKeyDown}
        // ></textarea>
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
      )}

      {editActive && editActive ? (
        <button onClick={handleChangeNote}>Change</button>
      ) : (
        <button
          onClick={() => {
            setEditActive(!editActive);
          }}
        >
          Edit
        </button>
      )}
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

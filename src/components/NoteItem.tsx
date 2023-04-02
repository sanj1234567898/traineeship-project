import React from "react";

import { useAppDispatch } from "@/redux/hook";
import { changeNote, removeNote } from "@/redux/slices/notesSlice";

import { INote } from "@/types/data";

import { validationTags } from "@/utils/validationTags";

import HighlightWithinTextarea from "react-highlight-within-textarea";

interface INoteItemProps extends INote {
  activeTags: Array<string>;
  setActiveTag: React.Dispatch<React.SetStateAction<string[]>>;
}

const NoteItem: React.FC<INoteItemProps> = ({
  id,
  text,
  tags,
  activeTags,
  setActiveTag,
}) => {
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

  const onChange = (changeText: string) => setChangeText(changeText);

  const handleRemoveTagFromActiveTag = (text: string) => {
    const tagFromText = text.split(" ").filter((str) => str.includes("#"))[0];
    setActiveTag(activeTags.filter((tag) => tag !== tagFromText));
  };

  return (
    <div className="note-list__items">
      {editActive && editActive ? (
        <div className="textarea">
          <HighlightWithinTextarea
            value={changeText}
            onChange={onChange}
            highlight={[...tags]}
            placeholder={"Type any text"}
          />
        </div>
      ) : (
        <div className="item__text">
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

      <div className="container__button">
        {editActive && editActive ? (
          <button className="btn" onClick={handleChangeNote}>
            Change
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => {
              setEditActive(!editActive);
            }}
          >
            Edit
          </button>
        )}
        <button
          className="btn"
          onClick={() => {
            dispatch(removeNote(id)) && handleRemoveTagFromActiveTag(text);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default NoteItem;

import React from "react";
// import debounce from "lodash.debounce";
import { useAppDispatch } from "@/redux/hook";
import { addNote } from "@/redux/slices/notesSlice";
import { validationTags } from "@/utils/validationTags";

const InputElem: React.FC = () => {
  const [text, setText] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const tags = validationTags(text);

  const handleAddNote = () => {
    if (!text.trim().length) return alert("Введите данные");

    dispatch(addNote({ text, tags }));

    setText("");
  };

  const handleAddKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    return e.key === "Enter" ? handleAddNote() : null;
  };

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="note">
      <div className="note__input">
        <input
          ref={inputRef}
          type={"text"}
          placeholder={"Type any text"}
          value={text}
          onChange={handleChangeInput}
          onKeyDown={handleAddKeyDown}
        />
        <button className="btn" onClick={handleAddNote}>
          click
        </button>
      </div>
      {tags && (
        <ul className="note__tag-list">
          {tags.map((tag, id) => (
            <li key={id}>
              <p>{tag}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputElem;

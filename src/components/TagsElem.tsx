import React from "react";

interface ITagsElem {
  AllUniqueTags: Array<string>;
  activeTags: Array<string>;
  setActiveTag: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagsElem: React.FC<ITagsElem> = ({
  AllUniqueTags,
  activeTags,
  setActiveTag,
}) => {
  return (
    <div className="tags">
      <div>
        <h2>All tags</h2>
        <ul>
          {AllUniqueTags.map((tag, id) => (
            <li
              onClick={() =>
                activeTags.includes(tag)
                  ? null
                  : setActiveTag([...activeTags, tag])
              }
              key={id}
              className="btn"
            >
              <p>{tag}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Display by tags</h2>
        <ul>
          {activeTags.map((tag, id) => (
            <li key={id} className="btn">
              <p>{tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagsElem;

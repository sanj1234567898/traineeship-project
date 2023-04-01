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
  const handleRemoveTag = (tag: string) => {
    setActiveTag(activeTags.filter((activeTag) => activeTag !== tag));
  };

  return (
    <div className="tags">
      <div>
        <h2>All tags</h2>
        <ul>
          {AllUniqueTags && AllUniqueTags.length > 0 ? (
            AllUniqueTags.map((tag, id) => (
              <li
                onClick={() =>
                  activeTags.includes(tag)
                    ? null
                    : setActiveTag([...activeTags, tag])
                }
                key={id}
                className="btn btn-tag"
              >
                <p>{tag}</p>
              </li>
            ))
          ) : (
            <li>
              <p>Waiting for tags...</p>
            </li>
          )}
        </ul>
      </div>
      <div>
        <h2>Display by tags</h2>
        <ul>
          {activeTags && activeTags.length > 0 ? (
            activeTags.map((tag, id) => (
              <li
                onClick={() => {
                  handleRemoveTag(tag);
                }}
                key={id}
                className="btn btn-tag"
              >
                <p>{tag}</p>
              </li>
            ))
          ) : (
            <li>
              <p>Waiting for tags...</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TagsElem;

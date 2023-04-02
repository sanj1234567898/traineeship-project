import { INote } from "@/types/data";

const getFromLS = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

const getNotesFromLS = () => {
  const data = localStorage.getItem("notes");
  const notes = data ? JSON.parse(data) : [];

  return notes;
};

export { getFromLS, getNotesFromLS };

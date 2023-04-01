import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import NotesList from "@/components/NotesList";
import InputElem from "@/components/InputElem";
import TagsElem from "@/components/TagsElem";
import { useAppSelector } from "@/redux/hook";
import { getUniqueTags } from "@/utils/getUniqueValue";
import { INote } from "@/types/data";

const Home: React.FC = () => {
  const notes = useAppSelector((state) => state.notes.items);
  const allTags = notes.map((obj) => obj.tags).flat(1);
  const AllUniqueTags = getUniqueTags(allTags);
  const [activeTags, setActiveTag] = React.useState<Array<string>>([]);
  const activeUniqueTags = getUniqueTags(activeTags);

  const filtredNotes: any = [];
  for (let tag of activeUniqueTags) {
    const filtredNote = notes.filter((note) => note.tags.includes(tag));
    filtredNotes.unshift(filtredNote);
  }
  const flatFiltredNotes: INote[] = filtredNotes.flat(1);

  return (
    <>
      <Head>
        <title>Traineeship project</title>
        <meta name="description" content="text editor of notes with tags" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <Layout>
        <div className="container__inner">
          <div className="left-side">
            <InputElem />
            <NotesList notes={notes} flatFiltredNotes={flatFiltredNotes} />
          </div>
          <div className="right-side">
            <TagsElem
              AllUniqueTags={AllUniqueTags}
              setActiveTag={setActiveTag}
              activeTags={activeTags}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import NotesList from "@/components/NotesList";
import InputElem from "@/components/InputElem";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Traineeship project</title>
        <meta name="description" content="text editor of notes with tags" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <Layout>
        <div>
          <InputElem />
          <NotesList />
        </div>
      </Layout>
    </>
  );
};

export default Home;

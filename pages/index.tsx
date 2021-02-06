import Link from "next/link";
import { useState } from "react";
import {
  useViewerQuery,
  useUpdateNameMutation,
  ViewerDocument,
} from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Index = () => {
  const { viewer } = useViewerQuery().data!;
  const [newName, setNewName] = useState("");
  const [updateNameMutation] = useUpdateNameMutation();

  const onChangeName = () => {
    updateNameMutation({
      variables: {
        name: newName,
      },
      //Follow apollo suggestion to update cache
      //https://www.apollographql.com/docs/angular/features/cache-updates/#update
      update: (
        store,
        {
          data: {
            updateName: { name },
          },
        }
      ) => {
        // Read the data from our cache for this query.
        const { viewer } = store.readQuery({ query: ViewerDocument });
        const newViewer = { ...viewer };
        // Add our comment from the mutation to the end.
        newViewer.name = name;
        // Write our data back to the cache.
        store.writeQuery({
          query: ViewerDocument,
          data: { viewer: newViewer },
        });
      },
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.graphql}>
          You're signed in as {viewer.name} and you're {viewer.status}. Go to
          the{" "}
          <Link href="/about">
            <a>about</a>
          </Link>{" "}
          page.
          <div>
            <input
              type="text"
              placeholder="your new name..."
              onChange={(e) => setNewName(e.target.value)}
            />
            <input type="button" value="change" onClick={onChangeName} />
          </div>
        </div>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;

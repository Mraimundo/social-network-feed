import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidbar/Sidbar";
import { Post, PostType } from "./components/Post/Post";

import "./styles/global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Mraimundo.png",
      name: "Mouzinho Raimundo",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2023-07-25 18:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Mraimundo.png",
      name: "Pedro Tungadio",
      role: "Backend Developer",
    },
    content: [
      { type: "paragraph", content: "Fala rede 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-07-28 18:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}

export default App;

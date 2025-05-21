import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", namme: "", role: ""}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/igcarvalhaes.png",
      name: "Igor Carvalhaes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-05-12 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/janedoe.png",
      name: "Carol Vianez",
      role: "UI/UX Designer",
    },
    content: [
      { type: "paragraph", content: "Oi pessoal! 😊" },
      {
        type: "paragraph",
        content:
          "Compartilhando aqui meu mais novo projeto de design. Trabalhei bastante nos detalhes para criar uma interface incrível! O projeto se chama DesignHub 🎨",
      },
      { type: "link", content: "designhub.io/project" },
    ],
    publishedAt: new Date("2025-05-10 10:30:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

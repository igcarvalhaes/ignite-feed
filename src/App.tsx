import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import type { PostType } from "./components/Post";

import imgProfileWoman from "./assets/profile-img/mulhermorenaprofile.png";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jack Weinlebster",
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
      avatarUrl: imgProfileWoman,
      name: "Carol Nakamura Yohama",
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
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}

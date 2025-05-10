import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Igor Carvalhaes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas animi quaerat distinctio culpa, deserunt laudantium nam facere nemo placeat?"
          />
          <Post
            author="Carol Vianez"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas animi quaerat distinctio culpa, deserunt laudantium nam facere nemo placeat?"
          />
        </main>
      </div>
    </>
  );
}

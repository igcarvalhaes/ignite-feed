import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

import { Avatar } from "./Avatar.js";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar
          hasBorder={false}
          src="https://github.com/igcarvalhaes.png"
          alt=""
        />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Igor Carvalhaes</strong>
                <time
                  title="11 de Maio às 08:13h"
                  dateTime="2025-05-11 08:13:45"
                >
                  Cerca de 1h atrás
                </time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

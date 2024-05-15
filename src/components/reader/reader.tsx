import Markdown from "react-markdown";
import { formatDate, formatReadTime } from "@/lib/formatter";
import styles from "./reader.module.css";

interface ReaderProps {
  title: string;
  date: string;
  readTime: number;
  content: string;
}

export const Reader = (props: ReaderProps) => {
  const { title, date, readTime, content } = props;
  return (
    <div className={styles.reader}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.date}>
          <span>{formatDate(date)}</span>
          <span> · </span>
          <span>{formatReadTime(readTime)}</span>
        </div>
      </div>
      <Markdown className={styles.content}>{content}</Markdown>
    </div>
  );
};

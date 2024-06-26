import Link from "next/link";
import styles from "./story-list.module.css";

export interface Story {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: number;
  category: string;
}

const StoryPreview = ({ story }: { story: Story }) => {
  return (
    <Link className={styles.link} href={story.id} legacyBehavior>
      <div className={styles.story}>
        <p className={styles.category}>{story.category}</p>
        <h3 className={styles.title}>{story.title}</h3>
        <p className={styles.excerpt}>{story.excerpt}</p>
        <div className={styles.date}>
          <span>{story.date}</span>
          <span> · </span>
          <span>{story.readTime} min</span>
        </div>
      </div>
    </Link>
  );
};

export const StoryList = ({ stories }: { stories: Story[] }) => {
  return (
    <div className={styles.list}>
      <div>
        <div className={styles.header}>
          <h1>Stories</h1>
        </div>
        {stories.map((story) => (
          <StoryPreview key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

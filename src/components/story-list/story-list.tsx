import styles from './story-list.module.css';

const stories = [
  {
    id: '1',
    title: 'Unethical design of cookie windows',
    date: '24 June, 2023',
    excerpt:
      'All of the sites we visit today use trackers. Various dictionaries use the interpunct (in this context, sometimes called a hyphenation point) to indicate where to split a word and insert a hyphen if the word doesnt fit on the line. There is also a separate Unicode character',
    readTime: 6,
  },
  {
    id: '2',
    title: '10 keyboard types in iOS',
    date: '24 June, 2023',
    excerpt: 'iOS provides several types of onscreen keyboard, each designed to facilitate a different situation.',
    readTime: '10',
  },
  // Add other stories
];

interface Story {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
}

export const StoryPreview = ({ story }: { story: Story }) => {
  return (
    <div className={styles.story}>
      <h2>{story.title}</h2>
      <p>{story.excerpt}</p>
      <div>
        <span>{story.date}</span>
        <span> · </span>
        <span>{story.readTime} min</span>
      </div>
    </div>
  );
};

export const StoryList = () => {
  return (
    <div className={styles.list}>
      {stories.map((story) => (
        <StoryPreview key={story.id} story={story} />
      ))}
    </div>
  );
};

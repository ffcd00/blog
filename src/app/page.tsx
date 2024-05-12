import Image from 'next/image';
import styles from './page.module.css';
import { StoryList } from '@/components/story-list/story-list';
import { Header } from '@/components/header/header';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <StoryList />
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import { Story, StoryList } from "@/components/story-list/story-list";
import { Header } from "@/components/header/header";

interface HomeProps {
  stories: Story[];
}

const getStoryList = async (): Promise<Story[]> => {
  const res = await fetch(`${process.env.API_PATH}/story-list`);
  const data = await res.json();
  return data?.stories;
};

export default async function Home() {
  const stories = await getStoryList();
  return (
    <main className={styles.main}>
      <StoryList stories={stories} />
    </main>
  );
}

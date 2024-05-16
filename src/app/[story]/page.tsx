import { Reader } from "@/components/reader/reader";
import type { Story } from "@/components/story-list/story-list";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.API_PATH}/story-list`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data?.stories?.map((story: Story) => ({ story: story.id })) ?? [];
};

const getStoryContent = async (storyId: string) => {
  const res = await fetch(`${process.env.API_PATH}/story/${storyId}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

const Story = async ({ params }: { params: { story: string } }) => {
  const { title, date, readTime, content } =
    (await getStoryContent(params.story)) ?? {};

  return (
    <div>
      <Reader
        title={title}
        date={date}
        readTime={readTime}
        content={content}
      ></Reader>
    </div>
  );
};

export default Story;

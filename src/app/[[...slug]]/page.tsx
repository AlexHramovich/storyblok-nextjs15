import { ISbStoriesParams, StoryblokClient, StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export async function generateStaticParams() {
  return [];
}

const fetchStory = async (slug?: string[]) => {
  const sbParams: ISbStoriesParams = { version: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION };
  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get(`cdn/stories/${slug ? slug.join('/') : 'home'}`, sbParams, { next: { tags: ['cms'] } });
}

type Params = Promise<{ slug?: string[] }>;

export default async function Home({ params }: { params: Params }) {
  const page = await fetchStory((await params).slug);

  return (
    <StoryblokStory story={page.data.story} />
  );
}

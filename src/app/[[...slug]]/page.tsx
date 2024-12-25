import { ISbStoriesParams, StoryblokClient, StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export async function generateStaticParams() {
  return [];
}

const fetchStory = async (slug?: string[]) => {
  const sbParams: ISbStoriesParams = { version: 'published' };
  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get(
    `cdn/stories/${slug ? slug.join('/') : 'home'}`,
    sbParams,
    {
      next: {
        tags: ['cms']
      }
    });
}

type Params = Promise<{ slug?: string[] }>;

export default async function Home({ params }: { params: Params }) {
  const slug = (await params).slug;

  const pageData = await fetchStory(slug);

  return (
    <StoryblokStory story={pageData.data.story} />
  );
}

import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export async function generateStaticParams() {
  return [];
}

const fetchStory = async (slug?: string[]) => {
  getStoryblokApi();
  const correctSlug = `/${slug ? slug.join('/') : 'home'}`

  return fetch(`
    https://api.storyblok.com/v2/cdn/stories${correctSlug}?version=published&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}`,
    { next: { tags: ['cms'] } }
  ).then((res) => res.json())
}

type Params = Promise<{ slug?: string[] }>;

export default async function Home({ params }: { params: Params }) {
  const slug = (await params).slug;
  const pageData = await fetchStory(slug);

  return (
    <StoryblokStory story={pageData.story} />
  );
}

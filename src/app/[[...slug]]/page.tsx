import { ISbStoriesParams, StoryblokClient, StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { useStoryBlokPreviewData } from "@/hooks/useStoryBlokPreviewData";

export async function generateStaticParams() {
  return [];
}

const fetchStory = async (slug?: string[]) => {
  const sbParams: ISbStoriesParams = { version: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION };
  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get(
    `cdn/stories/${slug ? slug.join('/') : 'home'}`,
    sbParams,
    {
      cache: 'force-cache',
      next: {
        tags: ['cms']
      }
    });
}

type Params = Promise<{ slug?: string[] }>;

export default async function Home({ params }: { params: Params }) {
  const slug = (await params).slug;

  const pageData = await fetchStory(slug);
  const previewPageData = useStoryBlokPreviewData(slug)

  if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION === 'draft' && !previewPageData) {
    return <div>Loading...</div>
  }

  return (
    <StoryblokStory story={previewPageData?.data.story || pageData.data.story} />
  );
}

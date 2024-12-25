import { ISbStoriesParams, StoryblokClient, StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
// import { useEffect, useState } from "react";

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
      cache: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION === 'draft' ? 'no-store' : 'force-cache',
      next: {
        tags: ['cms']
      }
    });
}

type Params = Promise<{ slug?: string[] }>;

export default async function Home({ params }: { params: Params }) {
  const pageData = await fetchStory((await params).slug);
  // const [previewPageData, setPreviewPageData] = useState<null | ISbResult>(null);

  // const fetchPreviewData = async () => {
  //   const previewData = await fetchStory((await params).slug);
  //   setPreviewPageData(previewData);
  // }

  // useEffect(() => {
  //   if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION === 'draft') {
  //     fetchPreviewData();
  //   }
  // }, [])

  // if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION === 'draft' && previewPageData) {
  //   return (
  //     <StoryblokStory story={previewPageData.data.story} />
  //   );
  // }

  // if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION !== 'draft') {
  return (
    <StoryblokStory story={pageData.data.story} />
  );
  // }
}

import { ISbStoriesParams, StoryblokClient, StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

const fetchStory = async (slug?: string[]) => {
    const sbParams: ISbStoriesParams = { version: 'draft' };
    const storyblokApi: StoryblokClient = getStoryblokApi();

    return storyblokApi.get(
        `cdn/stories/${slug ? slug.join('/') : 'home'}`,
        sbParams,
        {
            cache: 'no-store',
        });
}

type Params = Promise<{ slug?: string[] }>;

export default async function Home({ params }: { params: Params }) {
    if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION !== 'draft') {
        return null;
    }

    const slug = (await params).slug;
    const pageData = await fetchStory(slug);

    return (
        <StoryblokStory story={pageData.data.story} />
    );
}

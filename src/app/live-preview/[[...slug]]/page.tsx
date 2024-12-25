import { StoryblokStory } from "@storyblok/react/rsc";

const fetchStory = async (slug?: string[]) => {
    const correctSlug = `/${slug ? slug.join('/') : 'home'}`

    return fetch(`
        https://api.storyblok.com/v2/cdn/stories${correctSlug}?version=draft&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}`,
        { next: { revalidate: 0 } }
    ).then((res) => res.json())
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

'use client';

import { ISbResult, StoryblokStory } from "@storyblok/react/rsc";
import { useStoryBlokPreviewData } from "@/hooks/useStoryBlokPreviewData";

export default function StoryBlokRenderer({ slug, serverSideStory }: { slug?: string[], serverSideStory: ISbResult }) {
    const previewPageData = useStoryBlokPreviewData(slug)

    if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION === 'draft' && !previewPageData) {
        return <div>Loading...</div>
    }

    return (
        <StoryblokStory story={previewPageData?.data.story || serverSideStory.data.story} />
    );
}

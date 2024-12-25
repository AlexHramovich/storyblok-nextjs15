import { useEffect, useState } from "react";
import { ISbResult, StoryblokClient } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export const useStoryBlokPreviewData = (slug?: string[]) => {
    const storyblokApi: StoryblokClient = getStoryblokApi();
    const [previewPageData, setPreviewPageData] = useState<null | ISbResult>(null);

    const fetchPreviewData = async () => {
        const previewData = await storyblokApi.get(
            `cdn/stories/${slug ? slug.join('/') : 'home'}`,
            {
                version: 'draft'
            },
            {
                cache: 'no-store',
                next: {
                    tags: ['cms']
                }
            });

        setPreviewPageData(previewData);
    }

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION === 'draft') {
            fetchPreviewData();
        }
    }, [])

    if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION !== 'draft') {
        return null;
    }

    return previewPageData;
}
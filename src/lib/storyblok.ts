import { storyblokInit } from '@storyblok/react/rsc';

import Page from '@/components/Page';
import Teaser from '@/components/Teaser';

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    components: {
        page: Page,
        teaser: Teaser
    },
});
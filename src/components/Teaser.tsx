import { SbBlokData, storyblokEditable } from '@storyblok/react/rsc';
import React from 'react';

interface SbTeaserData extends SbBlokData {
    headline: string
}

interface TeaserProps {
    blok: SbTeaserData;
}

const Teaser: React.FunctionComponent<TeaserProps> = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)} className='flex justify-center items-center min-h-screen'>
            <h1>{blok.headline}</h1>
        </section>
    );
}

export default Teaser;
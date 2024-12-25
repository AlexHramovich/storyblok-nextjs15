import { SbBlokData, storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
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
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
                            {blok.headline}
                        </h1>
                        <div className='relative mt-8'>
                            <Image
                                alt='random image'
                                src="https://focusreactive.com/assets/img/hero_bg2.jpg"
                                width={900}
                                height={600}
                                priority
                                className='rounded-lg'
                                fetchPriority='high'
                            />
                            <h2 className='absolute bottom-4 left-4 text-white text-2xl sm:text-4xl'>
                                by <strong>FocusReactive</strong>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teaser;
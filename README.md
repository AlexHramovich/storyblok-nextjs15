# Next.js 15 + StoryBlok Starter

This repository serves as a starter template for integrating [Next.js 15](https://nextjs.org) with [StoryBlok](https://www.storyblok.com). It includes all the necessary configurations to help you get started with a headless CMS and a static site generator built with the App Router.

### Features

- **Next.js 15** with App Router
- **StoryBlok** integration
- **Pages Revalidation API**
- **StoryBlok Live-Preview** integration
- **Static Site Generation**
- **Tailwind CSS** for styling
- **TypeScript** for type safety

## Getting Started

> Ensure you have a StoryBlok account and a space with default content. If not, create a free account [here](https://www.storyblok.com).

1. Create a `.env.local` file in the root of the project and add the following environment variable:

    ```bash
    NEXT_PUBLIC_STORYBLOK_TOKEN=your_storyblok_preview_token
    ```
    Replace `your_storyblok_preview_token` with your actual StoryBlok API preview token.

2. Set up a preview domain in your StoryBlok space settings under `Settings > Visual Editor > Location (default environment)`. Change it to:

    ```bash
    https://localhost:3000/live-preview/
    ```

3. Run the development server:

    ```bash
    yarn run dev
    ```

    Open [https://localhost:3000](https://localhost:3000) in your browser and approve the security exception to enable StoryBlok live preview.

4. Ensure your StoryBlok home page content is correct. **Remove all sections except Teaser and save it**.

5. Click the save button in StoryBlok to see the live preview of your home page.

## Deployment

Create two projects in Vercel: one for preview and one for production. The only difference between them is the environment variable. Ensure the production project uses the **READ token** and the preview project uses the **PREVIEW token** to secure your draft content.

## Revalidation

We have provided a basic revalidation flow. Create a webhook in StoryBlok under `Settings > Webhooks` with the following URL:

```bash
https://your-project.vercel.app/api/revalidate
```

Replace `your-project` with your actual Vercel project name.

## Learn More

For a step-by-step setup guide, check our article that will walk you through the entire process.

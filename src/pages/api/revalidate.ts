import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
    if (!req.body.full_slug) {
        return res.status(400).json({ error: 'sb data is required' })
    }

    const correctSlug = req.body.full_slug === 'home' ? '' : `${req.body.full_slug}`

    try {
        await res.revalidate(`/${correctSlug}`)
        return res.json({ revalidated: true })
    } catch (err) {
        console.error(err)
        return res.status(500).send('Error revalidating')
    }
};

export default handler;
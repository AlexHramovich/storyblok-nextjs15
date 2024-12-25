import type { NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
    const data = await request.json();

    if (!data.full_slug) {
        return Response.json({ error: 'query parameter is required' }, { status: 400 })
    }

    const correctSlug = data.full_slug === 'home' ? '/' : `/${data.full_slug}`
    revalidatePath(correctSlug)

    return Response.json({ revalidated: true, now: Date.now() })
}
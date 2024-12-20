import type { NextRequest } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag')
    const data = await request.json();

    if (!tag || !data.full_slug) {
        return Response.json({ error: 'query parameter is required' }, { status: 400 })
    }

    const correctSlug = data.full_slug === 'home' ? '/' : data.full_slug

    revalidateTag(tag)
    revalidatePath(correctSlug)

    return Response.json({ revalidated: true, now: Date.now() })
}
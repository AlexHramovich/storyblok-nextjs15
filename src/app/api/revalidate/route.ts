import type { NextRequest } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag')
    const slug = request.nextUrl.searchParams.get('slug')

    if (!tag || !slug) {
        return Response.json({ error: 'query parameter is required' }, { status: 400 })
    }

    revalidateTag(tag)
    revalidatePath(slug || '/')

    return Response.json({ revalidated: true, now: Date.now() })
}
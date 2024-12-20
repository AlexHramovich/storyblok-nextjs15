import type { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag')

    if (!tag) {
        return Response.json({ error: 'tag query parameter is required' }, { status: 400 })
    }

    revalidateTag(tag)

    return Response.json({ revalidated: true, now: Date.now() })
}
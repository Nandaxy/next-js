import ytsr from 'ytsr';
import { NextResponse } from 'next/server';

async function formatDuration(seconds) {
  if (isNaN(seconds) || seconds <= 0) {
    return 'Unknown';
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours > 0 ? hours + 'h ' : ''}${minutes}m ${remainingSeconds}s`;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          author: 'Nanda',
          message: 'Missing query parameter',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const searchResults = await ytsr(query, { limit: 1 });
    const firstResult = searchResults.items[0];

    if (!firstResult) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          author: 'Nanda',
          message: 'No search results found',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = {
      status: true,
      author: 'Nanda',
      result: {
        title: firstResult.title,
        channel: firstResult.author.name,
        thumbnail: firstResult.bestThumbnail.url,
        duration: await formatDuration(firstResult.duration),
        views: firstResult.views ?? 0,
        uploadAt: firstResult.uploadedAt,
        url: firstResult.url,
        channelUrl: `https://www.youtube.com/channel/${firstResult.author.ref}`,
        description: firstResult.description || 'No description available',
        live: firstResult.live || false,
        type: firstResult.type,
        age_restricted: firstResult.age_restricted || false,
      },
    };

    return new NextResponse(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new NextResponse(
      JSON.stringify({
        status: false,
        author: 'Nanda',
        result: {
          error: 'Internal server error',
          message: error.message || 'Unknown error',
        },
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export default GET;

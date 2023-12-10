import axios from 'axios';
import { NextResponse } from 'next/server';

const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, ' \n');
  return data.replace(regex, '');
};

async function shortener(url) {
  // Implement your shortener logic if needed
  return url;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          author: 'Nanda',
          message: 'Missing TikTok URL',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await axios.post('https://lovetik.com/api/ajax/search', new URLSearchParams({ query: url }));

    const result = {
      status: true,
      author: 'Nanda',
      result: {
        title: clean(response.data.desc),
        author: clean(response.data.author),
        nowm: await shortener(response.data.links[0]?.a?.replace('https', 'http') || ''),
        watermark: await shortener(response.data.links[1]?.a?.replace('https', 'http') || ''),
        audio: await shortener(response.data.links[2]?.a?.replace('https', 'http') || ''),
        thumbnail: await shortener(response.data.cover),
      },
    };

    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing TikTok request:', error);
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

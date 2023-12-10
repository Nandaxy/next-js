import ytdl from 'ytdl-core';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          author: 'Nanda',
          message: 'Missing YouTube video URL',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const videoInfo = await ytdl.getInfo(url);
    const audioFormats = ytdl.filterFormats(videoInfo.formats, 'audioonly');

    if (audioFormats.length === 0) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          author: 'Nanda',
          message: 'No audio-only formats found',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const selectedAudioFormat = audioFormats[0];

    const response = {
      status: true,
      author: 'Nanda',
      result: {
        title: videoInfo.videoDetails.title,
        channel: videoInfo.videoDetails.author.name,
        thumbnail: videoInfo.videoDetails.thumbnails[0].url,
        downloadUrl: selectedAudioFormat.url,
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

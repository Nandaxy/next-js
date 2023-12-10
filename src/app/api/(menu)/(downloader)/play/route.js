import ytsr from 'ytsr';
import ytdl from 'ytdl-core';
import { NextResponse } from 'next/server';

function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours > 0 ? hours + ':' : ''}${String(minutes).padStart(2, '0')}:${String(
    remainingSeconds
  ).padStart(2, '0')}`;
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
          message: 'Missing search query',
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

    const videoInfo = await ytdl.getInfo(firstResult.url);
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
        id: videoInfo.videoDetails.videoId,
        title: videoInfo.videoDetails.title,
        channel: videoInfo.videoDetails.author.name,
        thumbnail: videoInfo.videoDetails.thumbnails[0].url,
        duration: formatDuration(videoInfo.videoDetails.lengthSeconds),
        views: videoInfo.videoDetails.viewCount ?? 0,
        likes: videoInfo.videoDetails.likes ?? 0,
        uploadAt: videoInfo.videoDetails.uploadDate,
        url: firstResult.url,
        channelUrl: `https://www.youtube.com/channel/${videoInfo.videoDetails.channelId}`,
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

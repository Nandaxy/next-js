import { NextResponse } from 'next/server';

export async function GET(request, context) {
  try {
    const { params } = context;
    const { id } = params;

    return new NextResponse(
      JSON.stringify({
        status: true,
        result: { id },
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new NextResponse(
      JSON.stringify({
        status: 500,
        result: { error: 'Internal server error', message: error.message || 'Unknown error' },
      }),
      { status: 500 }
    );
  }
}
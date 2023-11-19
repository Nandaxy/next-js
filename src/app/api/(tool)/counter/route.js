import fs from 'fs/promises';
import path from 'path';

export async function GET(request) {
  try {
    const filePath = path.resolve('data/database.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContent);

    return new Response(JSON.stringify(jsonData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response('{"error": "Failed to retrieve data."}', {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

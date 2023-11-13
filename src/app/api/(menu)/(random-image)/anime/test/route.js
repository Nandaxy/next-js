import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const getRandomImage = (imageLinks, localImageDir) => {
  const allImages = [...imageLinks, ...getLocalImages(localImageDir)];

  if (allImages.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * allImages.length);
  return allImages[randomIndex];
};

const getLocalImages = (localImageDir) => {
  const imageFiles = fs.readdirSync(localImageDir);
  return imageFiles.map((file) => path.join(localImageDir, file));
};

async function GET(request) {
  try {
    const jsonData = fs.readFileSync('data/anime/ikuyo.json', 'utf-8');
    const imageLinks = JSON.parse(jsonData);

    const localImageDir = 'data/anime/img';

    const [currentImage, setCurrentImage] = useState(null);
    const randomImage = getRandomImage(imageLinks, localImageDir);
    setCurrentImage(randomImage);

    if (currentImage) {
      const imageBuffer =
        currentImage.startsWith('http')
          ? await (await fetch(currentImage)).buffer()
          : fs.readFileSync(currentImage);

      return new Response(imageBuffer, {
        headers: {
          'Content-Type': currentImage.startsWith('http') ? 'image/jpeg' : 'image/png',
        },
      });
    } else {
      return new Response('No Image Available', { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export { GET };

import fs from "fs";
import fetch from "node-fetch";

export const fetchCache = 'force-no-store';

const getRandomImage = (imageLinks, sessionImages) => {
  const remainingImages = imageLinks.filter(
    (img) => !sessionImages.includes(img)
  );

  if (remainingImages.length === 0) {
    sessionImages.length = 0;
    return imageLinks[0];
  } else {
    const randomIndex = Math.floor(Math.random() * remainingImages.length);
    const selectedImage = remainingImages[randomIndex];

    sessionImages.push(selectedImage);
    return selectedImage;
  }
};

const sessionImages = [];

async function GET(request) {
  try {
    const jsonData = fs.readFileSync("data/anime/nijika.json", "utf-8");
    const imageLinks = JSON.parse(jsonData);

    const randomImage = getRandomImage(imageLinks, sessionImages);

    const imageResponse = await fetch(randomImage);
    const imageBuffer = await imageResponse.buffer();

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": imageResponse.headers.get("Content-Type"),
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export { GET };

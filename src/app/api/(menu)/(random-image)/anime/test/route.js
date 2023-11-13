import fs from "fs";
import path from "path";
import fetch from "node-fetch";

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
    const jsonData = fs.readFileSync("data/anime/ikuyo.json", "utf-8");
    const imageLinks = JSON.parse(jsonData);

    const localImageDir = "data/anime/img";

    const randomImage = getRandomImage(imageLinks, localImageDir);

    if (randomImage) {
      const imageBuffer =
        randomImage.startsWith("http")
          ? await (await fetch(randomImage)).buffer()
          : fs.readFileSync(randomImage);

      return new Response(imageBuffer, {
        headers: {
          "Content-Type": randomImage.startsWith("http")
            ? "image/jpeg"
            : "image/png",
        },
      });
    } else {
      return new Response("No Image Available", { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export { GET };

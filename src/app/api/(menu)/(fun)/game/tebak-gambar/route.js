import fs from "fs";

export async function GET(request) {
  try {
    const jsonData = fs.readFileSync('data/game/tebakGambar.json', "utf-8");

    const gameData = JSON.parse(jsonData);

    const queryParams = new URL(request.url).searchParams;
    const index = queryParams.get("index");
    const includeRandom = queryParams.get("pics");

    if (includeRandom !== null) {
      const randomIndex = Math.floor(Math.random() * gameData.length);
      const randomGame = gameData[randomIndex];

      if (randomGame) {
        return new Response(JSON.stringify(randomGame), {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        return new Response(
          JSON.stringify({ error: "Error generating random item", author: "Nanda" }),
          { status: 500 }
        );
      }
    } else if (index !== null) {
      const gameAtIndex = gameData[index];

      if (gameAtIndex) {
        return new Response(JSON.stringify(gameAtIndex), {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        return new Response(
          JSON.stringify({ error: "Index not found", author: "Nanda" }),
          { status: 404 }
        );
      }
    } else {
      return new Response(JSON.stringify(gameData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error reading the JSON file", author: "Nanda" }),
      { status: 500 }
    );
  }
}

const fs = require('fs');

async function GET(request) {
    try {
        const jsonData = fs.readFileSync('data/test.json', 'utf-8');
        const urls = JSON.parse(jsonData);

        // Mendapatkan URL secara acak
        const randomIndex = Math.floor(Math.random() * urls.length);
        const randomUrl = urls[randomIndex];

        // Menambahkan informasi status code dan nama penulis
        const responseBody = {
            status: 'success',
            data: {
                url: randomUrl,
                author: 'Nanda'
            }
        };

        // Mengembalikan respons dengan informasi status code, nama penulis, dan URL acak
        return new Response(JSON.stringify(responseBody), { headers: { 'Content-Type': 'application/json' }, status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

module.exports = { GET };

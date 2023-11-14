const fs = require('fs');

async function getRandomResponse(request) {
    try {
        const jsonData = fs.readFileSync('data/test.json', 'utf-8');
        const urls = JSON.parse(jsonData);

        // Pilih URL secara acak
        const randomIndex = Math.floor(Math.random() * urls.length);
        const randomUrl = urls[randomIndex];

        // Kirim respons dengan URL yang dipilih dan status code 200 (OK)
        return new Response(JSON.stringify({ selectedUrl: randomUrl }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error(error);
        // Jika terjadi kesalahan, kirim respons dengan status code 500 (Internal Server Error)
        return new Response('Internal Server Error', { status: 500 });
    }
}

module.exports = { getRandomResponse };

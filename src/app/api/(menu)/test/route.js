const fs = require('fs');

// Inisialisasi variabel global untuk menyimpan indeks terakhir
let lastUsedIndex = -1;

async function GET(request) {
    try {
        const jsonData = fs.readFileSync('data/test.json', 'utf-8');
        const urls = JSON.parse(jsonData);

        // Memastikan indeks yang dihasilkan berbeda dari yang terakhir kali digunakan
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * urls.length);
        } while (randomIndex === lastUsedIndex);

        // Menyimpan indeks terakhir yang digunakan
        lastUsedIndex = randomIndex;

        // Mendapatkan URL menggunakan indeks yang dihasilkan
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

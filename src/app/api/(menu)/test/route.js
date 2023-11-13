const fs = require('fs');

async function GET(request) {
    try {
        const jsonData = fs.readFileSync('data/test.json', 'utf-8');
        
        return new Response(jsonData, { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

module.exports = { GET };
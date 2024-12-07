export async function GET() {
    // this need to be adjust later
    const robots = `
    User-agent: *
    Disallow: /adminPanel
    
    Sitemap: http://localhost:3000/sitemap.xml
    `;
    return new Response(robots, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
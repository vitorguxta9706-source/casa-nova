export const config = { runtime: 'edge' };

export default async function handler(req) {
  const r = await fetch(
    'https://api.yampi.com.br/v2/casanova26/catalog/products?limit=24&include=skus,images',
    {
      method: 'GET',
      headers: {
        'User-Token': 'IkIkKull27qxtberoCWz3XURulQGOifwuO3R3GZh',
        'User-Secret-Key': 'sk_bKMQHQ0GbxjCi5sfGpj5LqhYUJ6Oxv0FDN6jO',
        'Accept': 'application/json'
      }
    }
  );
  const t = await r.text();
  return new Response(
    JSON.stringify({ status: r.status, body: t.substring(0, 500) }),
    { status: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
  );
}

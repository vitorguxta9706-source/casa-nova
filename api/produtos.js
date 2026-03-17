export const config = { runtime: 'edge' };

export default async function handler(req) {
  try {
    const response = await fetch(
      'https://api.yampi.com.br/v2/casanova26/catalog/products?limit=24&include=skus,images',
      {
        headers: {
          'User-Token': 'IkIkKull27qxtberoCWz3XURulQGOifwuO3R3GZh',
          'User-Secret-Key': 'sk_bKMQHQ0GbxjCi5sfGpj5LqhYUJ6Oxv0FDN6jO',
          'Accept': 'application/json'
        }
      }
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

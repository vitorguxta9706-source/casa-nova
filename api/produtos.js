export const config = { runtime: 'edge' };

export default async function handler(req) {
  const response = await fetch(
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

  const text = await response.text();

  return new Response(
    JSON.stringify({ status: response.status, body: text.substring(0, 500) }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
}
```

**4.** Clique em **"Commit changes"**

**5.** Aguarde o deploy e acesse:
```
https://casa-nova-iota.vercel.app/api/produtos

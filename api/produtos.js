export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

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

    if (!response.ok) throw new Error(`Yampi retornou status ${response.status}`);

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

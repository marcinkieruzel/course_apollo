### Query REST API ###

1. Tym razem stworzymy również mutacje
2. Uruchomimy testowe api przy pomocy json-server – `json-server --watch ./database.json`
3. Podobnie jak w porzpednim zadaniu stwórzmy resolvery dla pobierania danych tym razem będziemy się jednak posługiwali zapytaniami do api restowego pod adresem `http://localhost:3000/products`
4. Stwórzmy query
– getProduct(id)
– getProducts
5. Stwórzmy mutacje 
– createProduct(product)
– updateProduct(id, product)
– deleteProduct

### Konfiguracja ###

1. Konfigurujemy pierwszy projekt w Apollo
2. Stwórz serwer Express i dodaj do niego konfigurację Apollo:
```
const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  ```
3. Do prawidłowego działania potrzebne nam będą również middleware bodyParser
```
app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  ```
4. Uruchom projekt pod portem 4000 i zajrzyj do route /grapql
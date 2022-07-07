### Postgress ###

1. Zainstaluj bibliotekę `pg` poprzez npm 
2. Skonfiguruj połączenie – dane do bazy login `postgress` pass: `postgress` baza: `api` oraz standardowy port
3. Wykonaj skrypt `./data/users.js` – jeśli wszystko pójdzie zgodnie z planem powinien on stworzyć tabelę o nazwie `users` w bazie danych 
4. Przy pomocy pool.query wykonaj następujące operacje
– Dodaj kilku użytkowników – INSERT
– Zrób update użytkownika
– Usuń użytkownika 

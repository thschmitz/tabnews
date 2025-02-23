test("GET to /api/v1/status should return 200", async () => {
   const response = await fetch("http://localhost:3000/api/v1/status");
   expect(response.status).toBe(200);
}, 30000);

/*
test("TEST update_at FROM RESPONSE BODY", async () => {
   const response = await fetch("http://localhost:3000/api/v1/status");
   const responseBody = await response.json();
   expect(responseBody.updated_at).toBeDefined(); // Verifica se existe, e nao seu conteudo

   const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
   expect(responseBody.updated_at).toEqual(parsedUpdatedAt); // JS aceita null para criar essa data
   // Faco uma conversao forçada da data real e comparo elas, pra evitar vir um null e passar na validacao de transformar para uma data ISO8601
});
test("TEST db_version FROM RESPONSE BODY", async () => {
   const response = await fetch("http://localhost:3000/api/v1/status");

   const responseBody = await response.json();
   expect(responseBody.dependencies.database.db_version).toEqual("16.0");
});
test("TEST db_max_connections FROM RESPONSE BODY", async () => {
   const response = await fetch("http://localhost:3000/api/v1/status");

   const responseBody = await response.json();
   expect(responseBody.dependencies.database.db_max_connections).toEqual(100);
});

test("TEST db_used_connections FROM RESPONSE BODY", async () => {
   const response = await fetch("http://localhost:3000/api/v1/status");

   const responseBody = await response.json();
   expect(responseBody.dependencies.database.db_used_connections).toEqual(1);
});

test("TEST SENDING databaseName PARAMETER FROM REQUEST HEADER", async () => {
   await fetch("http://localhost:3000/api/v1/status?databaseName=local_db");
});*/

/*test("TEST TRYING TO BREAK DOWN THE DATABASE BEING", async () => {
   await fetch(
      "http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4); --",
   );
});*/

import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
   await database.query("drop schema public cascade; create schema public;");
}

test("POST to /api/v1/migrations should return 200", async () => {
   const response = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "POST",
   });
   expect(response.status).toBe(201);
}, 30000);

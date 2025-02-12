import database from "infra/database.js";

async function status(request, response) {
   const updatedAt = new Date().toISOString();
   const version = await database.query("SHOW server_version;");

   const databaseMaxConnection = await database.query("SHOW max_connections;");
   const databaseMaxConnectionValue =
      databaseMaxConnection.rows[0].max_connections;

   const databaseName = process.env.POSTGRES_DB;

   const databaseUsedConnectionsResult = await database.query({
      text: "SELECT COUNT(*)::int as length FROM pg_stat_activity WHERE datname = $1;",
      values: [databaseName],
   });

   const databaseUsedConnectionsValue =
      databaseUsedConnectionsResult.rows[0].count; // Conexoes abertas nesse momento, seja do nosso backend ou nao

   response.status(200).json({
      updated_at: updatedAt,
      dependencies: {
         database: {
            db_version: version.rows[0].server_version,
            db_max_connections: parseInt(databaseMaxConnectionValue),
            db_used_connections: databaseUsedConnectionsValue,
         },
      },
   });
}

export default status;

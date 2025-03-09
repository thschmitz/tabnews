import useSWR from "swr";

async function fetchAPI(key) {
   const response = await fetch(key);
   const responseBody = await response.json();
   return responseBody;
}

export default function StatusPage() {
   return (
      <>
         <h1>Status</h1>
         <UpdatedAt />
         <DBVersion />
         <DBMaxConnections />
         <DBOpenedConnections />
      </>
   );
}

function RetrievingDataStatus() {
   const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
      refreshInterval: 2000,
   });

   let text = "Carregando... ";

   return { text, isLoading, data };
}

function UpdatedAt() {
   let { text, isLoading, data } = RetrievingDataStatus();

   if (!isLoading) {
      text = new Date(data.updated_at).toLocaleString("pt-BR");
   }

   return <div>Última atualização: {text}</div>;
}

function DBVersion() {
   let { text, isLoading, data } = RetrievingDataStatus();

   if (!isLoading) {
      text = data.dependencies.database.version;
   }

   return <div>Versão do Banco de Dados: {text}</div>;
}

function DBMaxConnections() {
   let { text, isLoading, data } = RetrievingDataStatus();

   if (!isLoading) {
      text = data.dependencies.database.max_connections;
   }

   return <div>Número máxima de conexões do Banco de Dados: {text}</div>;
}

function DBOpenedConnections() {
   let { text, isLoading, data } = RetrievingDataStatus();

   if (!isLoading) {
      text = data.dependencies.database.opened_connections;
   }

   return <div>Número de conexões abertas no Banco de Dados: {text}</div>;
}

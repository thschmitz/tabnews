async function waitForNextServer() {
   const webServiceStatusCode = await awaitForWebService();

   if (webServiceStatusCode === 200) {
      process.stdout.write("\n🔵 Servidor Inicializado! \n");
   } else {
      process.stdout.write(".");
      await sleep(100);
      waitForNextServer();
   }
   async function awaitForWebService() {
      try {
         const response = await fetch("http://localhost:3000/api/v1/status");
         return response.status;
      } catch (error) {
         return -1;
      }
   }

   function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
   }
}

process.stdout.write("\n\n🔴 Aguardando Servidor \n");
waitForNextServer();

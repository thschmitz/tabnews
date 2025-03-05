const { spawn } = require("node:child_process");

spawn("next dev", { stdio: "inherit", shell: true });

function shutdown() {
   console.log(
      "\n🔴 Finalizando o processo e derrubando os containers do docker...",
   );

   spawn("npm run services:stop", {
      detached: true,
      shell: true,
      windowsHide: true,
      stdio: "ignore",
   });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

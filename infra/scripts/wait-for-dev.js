const { spawn } = require("node:child_process");

spawn("next dev", { stdio: "inherit", shell: true });

function shutdown() {
   console.log("\nTentando desligar de forma delicada...");

   spawn("npm run services:stop", {
      detached: true,
      shell: true,
      windowsHide: true,
      stdio: "ignore",
   });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
